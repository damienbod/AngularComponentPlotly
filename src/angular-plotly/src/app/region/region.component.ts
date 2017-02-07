import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable }  from 'rxjs/Observable';

import { PlotlyComponent } from '../plotly/plotly.component';
import { SnakeDataService } from '../snake-data.service';
import { GeographicalRegion } from '../models/GeographicalRegion';
import { GeographicalCountries } from '../models/GeographicalCountries';
import { BarTrace } from '../models/BarTrace';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})

export class RegionComponent implements OnInit, OnDestroy   {

    private id: number;
    public message: string;
    private sub: any;
    public GeographicalCountries: GeographicalCountries;

    private name: string;
    public PlotlyLayout: any;
    public PlotlyData: any;
    public PlotlyOptions: any;

    constructor(
        private _snakeDataService: SnakeDataService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.message = "region";
    }

	ngOnInit() {     

        this.sub = this._route.params.subscribe(params => {
            this.name = params['name']; 
            if (!this.GeographicalCountries) {
            this.getGetRegionBarChartData();
        } 
        });      
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    private getGetRegionBarChartData() {
        console.log('RegionComponent:getData starting...');
        this._snakeDataService
            .GetRegionBarChartData(this.name)
            .subscribe(data => this.setReturnedData(data),
            error => console.log(error),
            () => console.log('Get GeographicalCountries completed for region'));
    }

    private setReturnedData(data: any) {
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
    }

    private getYDatafromDatPoint() {
        return this.GeographicalCountries.NumberOfDeathsHighData.Y;
    }
}
