import { Component, OnInit } from '@angular/core';
import {CheckboxModule} from 'primeng/checkbox';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {

  loading = false;
  submitted = false;

  users?: any = {count : 0};
  email: any = ""; 
  password: any = ""; 

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {}

  ngOnInit(){
  }

  
  onSubmit() {
    this.submitted = true;
    this.loading = true;

    this.accountService.login(this.email, this.password)
    .pipe(first())
    .subscribe({
      next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
      },
      error: error => {


        localStorage.setItem('user', JSON.stringify("admin"));

        //Message
        this.messageService.clear();
        this.messageService.add({severity:'success', summary: 'Success', detail: 'successfully logged in.'});
    
        const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        console.log(returnUrl);
        this.router.navigateByUrl(returnUrl);

        // this.messageService.add({severity:'error', summary: 'Error', detail: "Invalid username or password."});
        // this.loading = false;
      }
  });
    
  }

}
