import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './layout-dashboard/dashboard-layout.component';
import { AuthGuard } from '../_helpers/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ReportsComponent } from './reports/reports.component';
import { ForecastComponent } from './forecast/forecast.component';


const routes: Routes = [
    {
        path: '', component: DashboardLayoutComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
            { path: 'profile', component: ProfileDetailsComponent, canActivate: [AuthGuard] },
            { path: 'reports', component: ReportsComponent, canActivate: [AuthGuard] },
            { path: 'forecast', component: ForecastComponent, canActivate: [AuthGuard] }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }