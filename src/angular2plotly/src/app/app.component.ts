import { Component } from '@angular/core';
import { SnakeDataService } from './snake-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
		SnakeDataService
  ]
})

export class AppComponent {
  title = 'angular2plotly works!';
}
