import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from  '@angular/router';

import { SnakeDataService } from './snake-data.service';

@Component({
  moduleId: module.id,
  selector: 'angular2plotly-app',
  templateUrl: 'angular2plotly.component.html',
  styleUrls: ['angular2plotly.component.css'],
  directives: [ROUTER_DIRECTIVES],
    providers: [
        SnakeDataService
    ]
})

export class Angular2plotlyAppComponent {
  title = 'angular2plotly works!';
}
