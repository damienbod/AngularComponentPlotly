System.register(['angular2/core', 'angular2/common', 'angular2/router', '../services/SnakeDataService'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, SnakeDataService_1;
    var OverviewComponent;
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
            function (SnakeDataService_1_1) {
                SnakeDataService_1 = SnakeDataService_1_1;
            }],
        execute: function() {
            OverviewComponent = (function () {
                function OverviewComponent(_snakeDataService, _router) {
                    this._snakeDataService = _snakeDataService;
                    this._router = _router;
                    this.message = "overview";
                }
                OverviewComponent.prototype.ngOnInit = function () {
                    console.log("ngOnInit OverviewComponent");
                    this.getData();
                };
                OverviewComponent.prototype.getData = function () {
                    var _this = this;
                    console.log('OverviewComponent:getData starting...');
                    this._snakeDataService
                        .GetGeographicalRegions()
                        .subscribe(function (data) { return _this.GeographicalRegions = data; }, function (error) { return console.log(error); }, function () { return console.log('OverviewComponent:getData:Get all completed'); });
                };
                OverviewComponent = __decorate([
                    core_1.Component({
                        selector: 'overview',
                        templateUrl: 'app/overview/overview.component.html',
                        directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [SnakeDataService_1.SnakeDataService, router_1.Router])
                ], OverviewComponent);
                return OverviewComponent;
            }());
            exports_1("OverviewComponent", OverviewComponent);
        }
    }
});
//# sourceMappingURL=overview.component.js.map