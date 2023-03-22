import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDefinedModalComponent } from './user-defined-modal.component';

describe('UserDefinedModalComponent', () => {
  let component: UserDefinedModalComponent;
  let fixture: ComponentFixture<UserDefinedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDefinedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDefinedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
