﻿import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { OverviewComponent } from './overview/overview.component';
import { RegionComponent } from './region/region.component';
import { SnakeDataService } from './services/SnakeDataService';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS,
        SnakeDataService
    ]
})

@RouteConfig([
        { path: '/overview', name: 'Overview', component: OverviewComponent },
        { path: '/region/:name', name: 'Region', component: RegionComponent },
])
 
export class AppComponent {

}