namespace AngularPlotlyAspNetCore.Models
{
    using System.Collections.Generic;

    using Newtonsoft.Json.Linq;

    public class GeographicalCountries
    {
        public BarTrace NumberOfCasesLowData { get; set; }

        public BarTrace NumberOfCasesHighData { get; set; }

        public BarTrace NumberOfDeathsLowData { get; set; }

        public BarTrace NumberOfDeathsHighData { get; set; }

        public string RegionName { get; set; }
   
        public List<string> X { get; set; }

    }
}

