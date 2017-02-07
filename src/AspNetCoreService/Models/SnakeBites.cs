namespace AngularPlotlyAspNetCore.Models
{
    using System;
    using ElasticsearchCRUD.ContextAddDeleteUpdate.CoreTypeAttributes;
    public class SnakeBites
    {
        [ElasticsearchString(Index = StringIndex.not_analyzed)]
        public string GeographicalRegion { get; set; }

        [ElasticsearchString(Index = StringIndex.not_analyzed)]
        public string Country { get; set; }

        public double NumberOfCasesLow { get; set; }
        public double NumberOfCasesHigh { get; set; }
        public double NumberOfDeathsLow { get; set; }
        public double NumberOfDeathsHigh { get; set; }

    }
}
