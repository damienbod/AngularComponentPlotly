import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'plotlychart',
    template: `
    <div *ngIf="data">working {{data}}</div>
    `,
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class PlotlyComponent implements OnInit {

    //<plotly data="data" layout= "layout" options= "options" > </plotly>

    @Input() data: any = {};
    @Input() layout: any = {};
    @Input() options: any = {};


    constructor() {
        console.log("constructor plotly component");
        console.log(this.data);
        console.log(this.layout);
        //Plotly.newPlot(graph, data, layout, options);
    }

    ngOnInit() {
        console.log("ngOnInit PlotlyComponent");
    }

}
