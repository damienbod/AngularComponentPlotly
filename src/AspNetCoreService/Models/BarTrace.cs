namespace AngularPlotlyAspNetCore.Models
{
    using System.Collections.Generic;

    //var trace2 = {
    //  x: ['giraffes', 'orangutans', 'monkeys'],
    //  y: [12, 18, 29],
    //  name: 'LA Zoo',
    //  type: 'bar'
    //};


    public class BarTrace
    {
        public List<double> Y { get; set; }
    }
}