import { Component } from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-layout',
  templateUrl: './account-layout.component.html',
  styleUrls: ['./account-layout.component.css']
})




export class AccountLayoutComponent {

  constructor(private router: Router) {}

  goPlaces() {
    this.router.navigateByUrl("/dashboard");
  }

}
