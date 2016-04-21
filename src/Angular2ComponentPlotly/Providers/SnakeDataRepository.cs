using System;
using System.Collections.Generic;
using System.IO;
using System.Threading;
using AngularPlotlyAspNetCore.Models;
using ElasticsearchCRUD;
using ElasticsearchCRUD.ContextSearch.SearchModel;
using ElasticsearchCRUD.ContextSearch.SearchModel.AggModel;
using ElasticsearchCRUD.ContextSearch.SearchModel.AggModel.Buckets;
using ElasticsearchCRUD.Model.SearchModel;
using ElasticsearchCRUD.Model.SearchModel.Aggregations;
using ElasticsearchCRUD.Model.SearchModel.Queries;
using Microsoft.Extensions.OptionsModel;
using Newtonsoft.Json;

namespace AngularPlotlyAspNetCore.Providers
{
    public class SnakeDataRepository : ISnakeDataRepository
    {
        private IOptions<SnakeDataRepositoryConfiguration> _optionsApplicationConfiguration;
        private readonly IElasticsearchMappingResolver _elasticsearchMappingResolver = new ElasticsearchMappingResolver();
        //private string _connectionString = "http://localhost:9200";
        private string _connectionString;

        public SnakeDataRepository(IOptions<SnakeDataRepositoryConfiguration> o)
        {
            _optionsApplicationConfiguration = o;
            _connectionString = _optionsApplicationConfiguration.Value.ElasticsearchPath;
        }



        public List<GeographicalRegion> GetGeographicalRegions()
        {
            List<GeographicalRegion> geographicalRegions = new List<GeographicalRegion>();
            var search = new Search
            {
                Aggs = new List<IAggs>
                {
                    new TermsBucketAggregation("getgeographicalregions", "geographicalregion")
                    {
                        Aggs = new List<IAggs>
                        {
                            new SumMetricAggregation("countCases", "numberofcaseshigh"),
                            new SumMetricAggregation("countDeaths", "numberofdeathshigh")
                        }
                    }
                }
            };

            using (var context = new ElasticsearchContext(_connectionString, _elasticsearchMappingResolver))
            {
                var items = context.Search<SnakeBites>(
                    search,
                    new SearchUrlParameters
                    {
                        SeachType = SeachType.count
                    });

                try
                {
                    var aggResult = items.PayloadResult.Aggregations.GetComplexValue<TermsBucketAggregationsResult>("getgeographicalregions");

                    foreach (var bucket in aggResult.Buckets)
                    {
                        var cases = Math.Round(bucket.GetSingleMetricSubAggregationValue<double>("countCases"), 2);
                        var deaths = Math.Round(bucket.GetSingleMetricSubAggregationValue<double>("countDeaths"), 2);
                        geographicalRegions.Add(
                            new GeographicalRegion {
                                Countries = bucket.DocCount,
                                Name = bucket.Key.ToString(),
                                NumberOfCasesHigh = cases,
                                NumberOfDeathsHigh = deaths,
                                DangerHigh =  (deaths > 1000)
                            });


                    }
                }
                catch (Exception ex)
                {
                    Console.WriteLine(ex.Message);
                }
            }
                   
            return geographicalRegions;
        } 

        public GeographicalCountries GetBarChartDataForRegion(string region)
        {
            GeographicalCountries result = new GeographicalCountries { RegionName = region};

            var search = new Search
            {
                Query = new Query(new MatchQuery("geographicalregion", region)),
                Size= 100
            };

            using (var context = new ElasticsearchContext(_connectionString, _elasticsearchMappingResolver))
            {
                var items = context.Search<SnakeBites>(search);
                
                result.NumberOfCasesHighData = new BarTrace { Y = new List<double>()};
                result.NumberOfCasesLowData = new BarTrace {Y = new List<double>() };
                result.NumberOfDeathsHighData = new BarTrace {  Y = new List<double>() };
                result.NumberOfDeathsLowData = new BarTrace {  Y = new List<double>() };
                result.X = new List<string>();

                foreach (var item in items.PayloadResult.Hits.HitsResult)
                {
                    result.NumberOfCasesHighData.Y.Add(item.Source.NumberOfCasesHigh);
                    result.NumberOfCasesLowData.Y.Add(item.Source.NumberOfCasesLow);
                    result.NumberOfDeathsHighData.Y.Add(item.Source.NumberOfDeathsHigh);
                    result.NumberOfDeathsLowData.Y.Add(item.Source.NumberOfDeathsLow);

                    result.X.Add(item.Source.Country);
                }
            }

            return result;
        }

        private double GetBucketValue(RangeBucket bucket, string key)
        {
            var res = bucket.GetSingleMetricSubAggregationValue<double?>(key);

            return (Math.Round(res.GetValueOrDefault(0.0), 2) * 100);
        }

        public void AddAllData()
        {
            var elasticsearchContext = new ElasticsearchContext("http://localhost:9200/", new ElasticsearchMappingResolver());

            elasticsearchContext.IndexCreate<SnakeBites>();

            Thread.Sleep(2000);

            List<SnakeBites> data = JsonConvert.DeserializeObject<List<SnakeBites>>(File.ReadAllText(_optionsApplicationConfiguration.Value.FilePath));
            long counter = 1;
            foreach (var snakeCountry in data)
            {
                // create some documents
                counter++;
                elasticsearchContext.AddUpdateDocument(snakeCountry, counter);
            }

            elasticsearchContext.SaveChanges();
        }
    }
}
