import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { Http } from 'angular2/http';
import { GeographicalRegion } from '../models/GeographicalRegion';
import { RegionComponent } from '../region/region.component';
import { SnakeDataService } from '../services/SnakeDataService';

@Component({
    selector: 'overviewcomponent',
    templateUrl: 'app/overview/overview.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class OverviewComponent implements OnInit {

    public message: string;
    public GeographicalRegions: GeographicalRegion[];

    constructor(
        private _snakeDataService: SnakeDataService,
        private _router: Router) {
        this.message = "overview.component";
    }

    ngOnInit() {
        console.log("ngOnInit OverviewComponent");
        this.getGeographicalRegionsData();
    }

    private getGeographicalRegionsData() {
        console.log('OverviewComponent:getData starting...');
        this._snakeDataService
            .GetGeographicalRegions()
            .subscribe(data => this.GeographicalRegions = data,
            error => console.log(error),
            () => console.log('OverviewComponent:getData:Get all completed'));
    }

}
