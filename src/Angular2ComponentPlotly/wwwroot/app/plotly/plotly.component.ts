import { Component, OnInit } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { Observable }       from 'rxjs/Observable';
import { Router, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
    selector: 'plotly',
    templateUrl: 'app/plotly/plotly.component.html',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})

export class PlotlyComponent implements OnInit {

    public message: string;

   
    constructor(
        private _router: Router) {
        this.message = "plotly";
    }

    ngOnInit() {
    }

}
