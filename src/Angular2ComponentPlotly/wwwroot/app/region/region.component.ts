import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { Observable }       from 'rxjs/Observable';

import { SnakeDataService } from '../services/SnakeDataService';
import { GeographicalRegion } from '../models/GeographicalRegion';
import { GeographicalCountries } from '../models/GeographicalCountries';
import { BarTrace } from '../models/BarTrace';

@Component({
    selector: 'region',
    templateUrl: 'app/region/region.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class RegionComponent implements OnInit {

    public message: string;
    public GeographicalCountries: GeographicalCountries;

    private name: string;
    public PlotlyLayout: any = {};
    public PlotlyData: any = {};
    public PlotlyOptions: any = {};

    constructor(
        private _snakeDataService: SnakeDataService,
        private _routeParams: RouteParams,
        private _router: Router
    ) {
        this.message = "region";
    }

    ngOnInit() {
        this.name = this._routeParams.get('name');
        console.log("ngOnInit RegionComponent");
        if (!this.GeographicalCountries) {
            this.getGetRegionBarChartData();
        }
    }

    private getGetRegionBarChartData() {
        console.log('RegionComponent:getData starting...');
        this._snakeDataService
            .GetRegionBarChartData(this.name)
            .subscribe(data => this.setReturnedData(data),
            error => console.log(error),
            () => console.log('Get GeographicalCountries completed for region'));
    }

    private setReturnedData(data: any) {
        this.GeographicalCountries = data;
        this.PlotlyLayout = {
            title: this.GeographicalCountries.RegionName + ": Number of snake bite deaths",
            height: 500,
            width: 1200
        };

        this.PlotlyData = [
            {
                x: this.GeographicalCountries.X,
                y: this.getYDatafromDatPoint(),
                name: "Number of snake bite deaths",
                type: 'bar',
                orientation: 'v'
            }
        ];
    }

    private getYDatafromDatPoint() {
        return this.GeographicalCountries.NumberOfDeathsHighData.Y;
    }
}
