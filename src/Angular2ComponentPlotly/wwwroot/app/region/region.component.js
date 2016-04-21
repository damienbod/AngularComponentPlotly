System.register(['angular2/core', 'angular2/common', 'angular2/router', '../plotly/plotly.component', '../services/SnakeDataService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, plotly_component_1, SnakeDataService_1;
    var RegionComponent;
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
            },
            function (plotly_component_1_1) {
                plotly_component_1 = plotly_component_1_1;
            },
            function (SnakeDataService_1_1) {
                SnakeDataService_1 = SnakeDataService_1_1;
            }],
        execute: function() {
            RegionComponent = (function () {
                function RegionComponent(_snakeDataService, _routeParams, _router) {
                    this._snakeDataService = _snakeDataService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this.message = "region";
                }
                RegionComponent.prototype.ngOnInit = function () {
                    this.name = this._routeParams.get('name');
                    console.log("ngOnInit RegionComponent");
                    if (!this.GeographicalCountries) {
                        this.getGetRegionBarChartData();
                    }
                };
                RegionComponent.prototype.getGetRegionBarChartData = function () {
                    var _this = this;
                    console.log('RegionComponent:getData starting...');
                    this._snakeDataService
                        .GetRegionBarChartData(this.name)
                        .subscribe(function (data) { return _this.setReturnedData(data); }, function (error) { return console.log(error); }, function () { return console.log('Get GeographicalCountries completed for region'); });
                };
                RegionComponent.prototype.setReturnedData = function (data) {
                    this.GeographicalCountries = data;
                    this.PlotlyLayout = {
                        title: this.GeographicalCountries.RegionName + ": Number of snake bite deaths",
                        height: 500,
                        width: 1200
                    };
                    this.PlotlyData = [
                        {
                            x: this.GeographicalCountries.X,
                            y: this.getYDatafromDatPoint(),
                            name: "Number of snake bite deaths",
                            type: 'bar',
                            orientation: 'v'
                        }
                    ];
                    console.log("recieved plotly data");
                    console.log(this.PlotlyData);
                };
                RegionComponent.prototype.getYDatafromDatPoint = function () {
                    return this.GeographicalCountries.NumberOfDeathsHighData.Y;
                };
                RegionComponent = __decorate([
                    core_1.Component({
                        selector: 'region',
                        templateUrl: 'app/region/region.component.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES, plotly_component_1.PlotlyComponent]
                    }), 
                    __metadata('design:paramtypes', [SnakeDataService_1.SnakeDataService, router_1.RouteParams, router_1.Router])
                ], RegionComponent);
                return RegionComponent;
            }());
            exports_1("RegionComponent", RegionComponent);
        }
    }
});
//# sourceMappingURL=region.component.js.map