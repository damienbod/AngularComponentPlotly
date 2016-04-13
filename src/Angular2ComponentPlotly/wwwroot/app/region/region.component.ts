import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { RouteParams, Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { PlotlyComponent } from '../plotly/plotly.component';

import { SnakeDataService } from '../services/SnakeDataService';
import { GeographicalRegion } from '../models/GeographicalRegion';
import { GeographicalCountries } from '../models/GeographicalCountries';

@Component({
    selector: 'region',
    templateUrl: 'app/region/region.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class RegionComponent implements OnInit {

    public message: string;
    public GeographicalCountries: GeographicalCountries;

    private name: string;

    constructor(
        private _snakeDataService: SnakeDataService,
        private _routeParams: RouteParams,
        private _router: Router) {
        this.message = "region";
        this.name = this._routeParams.get('name');
    }

    ngOnInit() {        
        if (!this.GeographicalCountries) {
            this.getData();
        }

    }

    private getData() {
        console.log('RegionComponent:getData starting...');
        this._snakeDataService
            .GetRegionBarChartData(this.name)
            .subscribe(data => this.GeographicalCountries = data,
            error => console.log(error),
            () => console.log('Get GeographicalCountries completed for region'));
    }
}
