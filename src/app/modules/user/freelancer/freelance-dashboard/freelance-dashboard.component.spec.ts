import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceDashboardComponent } from './freelance-dashboard.component';

describe('FreelanceDashboardComponent', () => {
  let component: FreelanceDashboardComponent;
  let fixture: ComponentFixture<FreelanceDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelanceDashboardComponent]
    });
    fixture = TestBed.createComponent(FreelanceDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
