import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { BadgeModule } from 'primeng/badge';
import { RippleModule } from 'primeng/ripple';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import {ToastModule} from 'primeng/toast';


import {StyleClassModule} from 'primeng/styleclass';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DashboardLayoutComponent } from './pages/layout-dashboard/dashboard-layout.component';
import { AccountLayoutModule } from './account/account-layout/account-layout.module';
import { DashboardLayoutModule } from './pages/layout-dashboard/dashboard-layout.module';
import { AccountRoutingModule } from './account/account-routing';
import { PagesRoutingModule } from './pages/pages-routing';
import { LoginComponent } from './account/login/login.component';
import { LoginModule } from './account/login/login.module';
import { MessageService } from 'primeng/api';
import { ProfileDetailsComponent } from './pages/profile/profile-details/profile-details.component';
import { ProfileDetailsModule } from './pages/profile/profile-details/profile-details.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorInterceptor } from './_services/error.interceptor';
import { ReportsComponent } from './pages/reports/reports.component';
import { ReportsModule } from './pages/reports/reports.module';
import { DashboardModule } from './pages/dashboard/dashboard.module';
import { UserDefinedModalComponent } from './pages/components/user-defined-modal/user-defined-modal.component';
import { DialogModule } from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import {CalendarModule} from 'primeng/calendar';
import { TagModule } from 'primeng/tag';
import { DashboardCategoryViewComponent } from './pages/components/dashboard-category-view/dashboard-category-view.component';
import { CheckboxModule } from 'primeng/checkbox';
import { ForecastComponent } from './pages/forecast/forecast.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    UserDefinedModalComponent,
    DashboardComponent,
    DashboardCategoryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StyleClassModule,
    CommonModule,
    InputTextModule,
    BadgeModule,
    RippleModule,
    SelectButtonModule,
    FormsModule,
    ButtonModule,
    AccountRoutingModule,
    PagesRoutingModule,
    AccountLayoutModule,
    LoginModule,
    ReactiveFormsModule,
    ToastModule,
    ProfileDetailsModule,
    ReportsModule,
    DashboardModule,
    DialogModule,
    DropdownModule,
    MultiSelectModule,
    CalendarModule,
    TagModule,
    CheckboxModule,
    ToastModule,
    ChartModule
  ],
  providers: [
    MessageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
