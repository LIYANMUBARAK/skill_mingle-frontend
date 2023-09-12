import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerOrdersComponent } from './freelancer-orders.component';

describe('FreelancerOrdersComponent', () => {
  let component: FreelancerOrdersComponent;
  let fixture: ComponentFixture<FreelancerOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerOrdersComponent]
    });
    fixture = TestBed.createComponent(FreelancerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
