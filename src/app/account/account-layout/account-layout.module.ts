import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountLayoutComponent } from './account-layout.component';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ToastModule } from 'primeng/toast';


@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    RouterModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressSpinnerModule,
    ToastModule
  ],
  declarations: [AccountLayoutComponent]
})
export class AccountLayoutModule { }



