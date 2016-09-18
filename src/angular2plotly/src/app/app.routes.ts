import { provideRouter, RouterConfig } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RegionComponent } from './region/region.component';

export const routes: RouterConfig = [
    { path: '', component: OverviewComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'region/:name', component: RegionComponent },
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
