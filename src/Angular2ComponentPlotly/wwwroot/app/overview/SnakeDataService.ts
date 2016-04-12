import { Injectable } from 'angular2/core';
import { Http, Response, Headers } from 'angular2/http';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import { GeographicalRegion } from './models/GeographicalRegion';
import { GeographicalCountries } from './models/GeographicalCountries';

@Injectable()
export class SnakeDataService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {
        this.actionUrl = `${_configuration.Server}api/SnakeData/`;   
    }

    private setHeaders() {
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public GetGeographicalRegions = (): Observable<GeographicalRegion[]> => {
        this.setHeaders();
        return this._http.get(`${this.actionUrl}GeographicalRegions`, {
            headers: this.headers
        }).map(res => res.json());
    }

    public GetRegionBarChartData = (region: string): Observable<GeographicalCountries> => {
        this.setHeaders();
        return this._http.get(`${this.actionUrl}RegionBarChart/${region}`, {
            headers: this.headers
        }).map(res => res.json());
    }

}