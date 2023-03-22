import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {CheckboxModule} from 'primeng/checkbox';
import { LoginComponent } from './login.component';


import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext'; 
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

import {ToastModule} from 'primeng/toast';

import {ProgressSpinnerModule} from 'primeng/progressspinner';

@NgModule({
  imports: [
    CommonModule,
    StyleClassModule,
    RouterModule,
    CheckboxModule,
    RippleModule,
    DividerModule,
    CarouselModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    ProgressSpinnerModule,
    FormsModule,
    ToastModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }



