System.register(['angular2/core', 'angular2/common', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, router_1;
    var PlotlyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            PlotlyComponent = (function () {
                function PlotlyComponent() {
                }
                PlotlyComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit PlotlyComponent");
                    console.log(this.data);
                    console.log(this.layout);
                    Plotly.newPlot('myPlotlyDiv', this.data, this.layout, this.options);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlotlyComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlotlyComponent.prototype, "layout", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], PlotlyComponent.prototype, "options", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], PlotlyComponent.prototype, "displayRawData", void 0);
                PlotlyComponent = __decorate([
                    core_1.Component({
                        selector: 'plotlychart',
                        template: "\n<div style=\"margin-bottom:100px;\">\n    <div id=\"myPlotlyDiv\"\n         name=\"myPlotlyDiv\"\n         style=\"width: 480px; height: 400px;\">\n        <!-- Plotly chart will be drawn inside this DIV -->\n    </div>\n</div>\n\n<div *ngIf=\"displayRawData\">\n    raw data:\n    <hr />\n    <span>{{data | json}}</span>\n    <hr />\n    layout:\n    <hr />\n    <span>{{layout | json}}</span>\n    <hr />\n</div>\n",
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], PlotlyComponent);
                return PlotlyComponent;
            }());
            exports_1("PlotlyComponent", PlotlyComponent);
        }
    }
});
//# sourceMappingURL=plotly.component.js.map