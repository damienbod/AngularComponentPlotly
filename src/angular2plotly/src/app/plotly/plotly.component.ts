import { Component, EventEmitter, Input, Output, OnInit, ElementRef} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router } from  '@angular/router';

declare var Plotly: any;

@Component({
  selector: 'plotlychart',
  template: `
<div style="margin-bottom:100px;">
    <div id="myPlotlyDiv"
         name="myPlotlyDiv"
         style="width: 480px; height: 400px;">
        <!-- Plotly chart will be drawn inside this DIV -->
    </div>
</div>

<div *ngIf="displayRawData">
    raw data:
    <hr />
    <span>{{data | json}}</span>
    <hr />
    layout:
    <hr />
    <span>{{layout | json}}</span>
    <hr />
</div>
`,
  styleUrls: ['./plotly.component.css']
})


export class PlotlyComponent implements OnInit {

    @Input() data: any;
    @Input() layout: any;
    @Input() options: any;
    @Input() displayRawData: boolean;

    ngOnInit() {
        console.log("ngOnInit PlotlyComponent");
        console.log(this.data);
        console.log(this.layout);

        Plotly.newPlot('myPlotlyDiv', this.data, this.layout, this.options);
    }
}
