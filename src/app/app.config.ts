import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class AppConfig {

    theme: string = 'tailwind-light';

    dark: boolean = true;

    inputStyle: string = 'outlined';

    ripple: boolean = true;

}