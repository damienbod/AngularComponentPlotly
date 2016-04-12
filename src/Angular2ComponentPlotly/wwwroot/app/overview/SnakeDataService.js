System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', '../app.constants'], function(exports_1, context_1) {
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
    var core_1, http_1, app_constants_1;
    var SnakeDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (app_constants_1_1) {
                app_constants_1 = app_constants_1_1;
            }],
        execute: function() {
            SnakeDataService = (function () {
                function SnakeDataService(_http, _configuration) {
                    var _this = this;
                    this._http = _http;
                    this._configuration = _configuration;
                    this.GetGeographicalRegions = function () {
                        _this.setHeaders();
                        return _this._http.get(_this.actionUrl + "GeographicalRegions", {
                            headers: _this.headers
                        }).map(function (res) { return res.json(); });
                    };
                    this.GetRegionBarChartData = function (region) {
                        _this.setHeaders();
                        return _this._http.get(_this.actionUrl + "RegionBarChart/" + region, {
                            headers: _this.headers
                        }).map(function (res) { return res.json(); });
                    };
                    this.actionUrl = _configuration.Server + "api/SnakeData/";
                }
                SnakeDataService.prototype.setHeaders = function () {
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                };
                SnakeDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, app_constants_1.Configuration])
                ], SnakeDataService);
                return SnakeDataService;
            }());
            exports_1("SnakeDataService", SnakeDataService);
        }
    }
});
//# sourceMappingURL=SnakeDataService.js.map