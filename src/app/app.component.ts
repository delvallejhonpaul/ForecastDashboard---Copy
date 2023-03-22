import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ForecastDashboard';
  scale: number = 13;
  constructor(private primengConfig: PrimeNGConfig, private router: Router, public appConfig: AppConfig) {}

  goPlaces() {
    this.router.navigateByUrl("/dashboard");
  }

  ngOnInit() {
      this.primengConfig.ripple = true;

      this.applyScale();

      let themeElement = document.getElementById('theme-link');
        themeElement.setAttribute('href', themeElement.getAttribute('href').replace(this.appConfig.theme, this.appConfig.theme));
  }

  applyScale() {
    document.documentElement.style.fontSize = this.scale + 'px';
  }


}
