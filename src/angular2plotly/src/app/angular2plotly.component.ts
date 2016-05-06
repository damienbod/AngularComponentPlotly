import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from  '@angular/router-deprecated';

import { OverviewComponent } from './overview/overview.component';
import { RegionComponent } from './region/region.component';
import { SnakeDataService } from './snake-data.service';

@Component({
  moduleId: module.id,
  selector: 'angular2plotly-app',
  templateUrl: 'angular2plotly.component.html',
  styleUrls: ['angular2plotly.component.css'],
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
 
export class Angular2plotlyAppComponent {
  title = 'angular2plotly works!';
}
