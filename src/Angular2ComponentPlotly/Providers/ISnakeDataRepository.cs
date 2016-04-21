using System.Collections.Generic;
using AngularPlotlyAspNetCore.Models;

namespace AngularPlotlyAspNetCore
{
    public interface ISnakeDataRepository
    {
        List<GeographicalRegion> GetGeographicalRegions();

        GeographicalCountries GetBarChartDataForRegion(string machineName);

        void AddAllData();
    }
}
