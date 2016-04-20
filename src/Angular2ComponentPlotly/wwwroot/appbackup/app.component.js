System.register(['angular2/core', 'angular2/router', './overview/overview.component', './region/region.component', './plotly/plotly.component', './services/SnakeDataService'], function(exports_1, context_1) {
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
    var core_1, router_1, overview_component_1, region_component_1, plotly_component_1, SnakeDataService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (overview_component_1_1) {
                overview_component_1 = overview_component_1_1;
            },
            function (region_component_1_1) {
                region_component_1 = region_component_1_1;
            },
            function (plotly_component_1_1) {
                plotly_component_1 = plotly_component_1_1;
            },
            function (SnakeDataService_1_1) {
                SnakeDataService_1 = SnakeDataService_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, plotly_component_1.PlotlyComponent],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            SnakeDataService_1.SnakeDataService
                        ]
                    }),
                    router_1.RouteConfig([
                        { path: '/overview', name: 'Overview', component: overview_component_1.OverviewComponent },
                        { path: '/region/:name', name: 'Region', component: region_component_1.RegionComponent },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map