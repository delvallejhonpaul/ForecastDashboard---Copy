import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCategoryViewComponent } from './dashboard-category-view.component';

describe('DashboardCategoryViewComponent', () => {
  let component: DashboardCategoryViewComponent;
  let fixture: ComponentFixture<DashboardCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCategoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
