namespace AngularPlotlyAspNetCore.Models
{
    public class GeographicalRegion
    {
        public string Name { get; set; }
        public double Countries{ get; set; }

        public double NumberOfCasesHigh { get; set; }
        public double NumberOfDeathsHigh { get; set; }

        public bool DangerHigh { get; set; }
    }
}