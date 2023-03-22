import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  constructor(
    private router: Router, 
    private accountService: AccountService,
    private messageService: MessageService
    ) {}

  goHome() {
    this.router.navigateByUrl("/dashboard");
  }

  goProfile() {
    this.router.navigateByUrl("/profile");
  }

  goReports() {
    this.router.navigateByUrl("/reports");
  }

  logout() {
    this.accountService.logout();
    this.messageService.add({severity:'success', summary: 'Success', detail: 'successfully logged out.'});
  }

}
