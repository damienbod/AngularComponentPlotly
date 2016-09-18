import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Configuration } from './app.constants';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { PlotlyComponent } from './plotly/plotly.component';
import { RegionComponent } from './region/region.component';

@NgModule({
  declarations: [
    routing,
    AppComponent,
    OverviewComponent,
    PlotlyComponent,
    RegionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    Configuration   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
