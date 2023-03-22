import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {DropdownModule} from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';


@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    ToastModule
  ],
  declarations: [DashboardLayoutComponent]
})
export class DashboardLayoutModule { }



