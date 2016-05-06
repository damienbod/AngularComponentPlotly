import { Component, OnInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { Observable }       from 'rxjs/Observable';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS }  from  '@angular/router-deprecated';
import { Http } from '@angular/http';
import { GeographicalRegion } from '../models/GeographicalRegion';
import { RegionComponent } from '../region/region.component';
import { SnakeDataService } from '../snake-data.service';

@Component({
  moduleId: module.id,
  selector: 'app-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.css'],
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
