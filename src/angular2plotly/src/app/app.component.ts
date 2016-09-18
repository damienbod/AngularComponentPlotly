import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from  '@angular/router';

import { SnakeDataService } from './snake-data.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  directives: [ROUTER_DIRECTIVES],
    providers: [
        SnakeDataService
    ]
})

export class AppComponent {
  title = 'angular2plotly works!';
}
