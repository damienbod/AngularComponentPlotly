import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { Configuration } from './app.constants';
import { routing } from './app.routes';
import { HttpModule, JsonpModule } from '@angular/http';

import { OverviewComponent } from './overview/overview.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { RegionComponent } from './region/region.component';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
		OverviewComponent,
		RegionComponent,
		PlotlyComponent
    ],
    providers: [
        Configuration
    ],
    bootstrap:    [AppComponent],
})

export class AppModule {}

