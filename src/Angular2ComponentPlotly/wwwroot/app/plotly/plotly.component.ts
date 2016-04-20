import { Component, EventEmitter, Input, Output, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';

@Component({
    selector: 'plotlychart',
    templateUrl: 'app/plotly/plotly.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class PlotlyComponent implements OnInit {
    @Input() data: any;
    @Input() layout: any;
    @Input() options: any;

    constructor() {
        console.log("constructor plotly component");
    }

    ngOnInit() {
        console.log("ngOnInit PlotlyComponent");
        console.log(this.data);
        console.log(this.layout);
    }

}
