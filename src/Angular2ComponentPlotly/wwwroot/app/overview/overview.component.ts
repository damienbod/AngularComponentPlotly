import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

import { SnakeDataService } from '../overview/SnakeDataService';
import { GeographicalRegion } from './models/GeographicalRegion';
import { GeographicalCountries } from './models/GeographicalCountries';

@Component({
    selector: 'overview',
    templateUrl: 'app/overview/overview.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class OverviewComponent implements OnInit {

    public message: string;
    public GeographicalRegions: GeographicalRegion[];
   
    constructor(
        private _snakeDataService: SnakeDataService,
        private _router: Router) {
        this.message = "overview";
    }

    ngOnInit() {
        this.getData();
    }

    private getData() {
        console.log('OverviewComponent:getData starting...');
        this._snakeDataService
            .GetGeographicalRegions()
            .subscribe(data => this.GeographicalRegions = data,
            error => console.log(error),
            () => console.log('Get all completed'));
    }

}
