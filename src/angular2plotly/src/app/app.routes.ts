import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { RegionComponent } from './region/region.component';

const appRoutes: Routes = [
    { path: '', component: OverviewComponent },
    { path: 'overview', component: OverviewComponent },
    { path: 'region/:name', component: RegionComponent },
];


export const routing = RouterModule.forRoot(appRoutes);



