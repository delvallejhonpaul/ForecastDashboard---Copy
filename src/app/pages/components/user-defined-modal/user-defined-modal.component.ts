import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-user-defined-modal',
  templateUrl: './user-defined-modal.component.html',
  styleUrls: ['./user-defined-modal.component.css']
})

export class UserDefinedModalComponent {

  value: Date;
  value1: Date;

  displayBasic2: boolean = true;

  cities: any[];
  carparks: any[];
  selectedCities: any[] = [{name: 'Hospital', code: 'NY'}, {name: 'Hotel', code: 'RM'}];
  selectedCarparks: any[] = [{name: 'AA-0000', code: 'A0'}, {name: 'AA-0001', code: 'A1'}];
  countries: any[];

  constructor(private messageService: MessageService) {
    this.cities = [
        {name: 'Hospital', code: 'NY'},
        {name: 'Hotel', code: 'RM'}
    ];

    this.carparks = [
      {name: 'AA-0000', code: 'A0'},
      {name: 'AA-0001', code: 'A1'}
  ];
}

  showBasicDialog2() {
      this.displayBasic2 = true;
  }

  save() {
    this.displayBasic2 = false;
    this.messageService.add({severity:'success', summary: 'Success', detail: 'successfully save.'});
  }
  
}
