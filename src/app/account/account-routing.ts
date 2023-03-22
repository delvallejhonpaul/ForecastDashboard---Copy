import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account-layout/account-layout.component';
import { LoginComponent } from './login/login.component';
import {CheckboxModule} from 'primeng/checkbox';


const routes: Routes = [
    {
        path: '', component: AccountLayoutComponent,
        children: [
            { path: 'account/login', component: LoginComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes), CheckboxModule],
    exports: [RouterModule]
})
export class AccountRoutingModule { }