import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerOrderDetailsComponent } from './freelancer-order-details.component';

describe('FreelancerOrderDetailsComponent', () => {
  let component: FreelancerOrderDetailsComponent;
  let fixture: ComponentFixture<FreelancerOrderDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerOrderDetailsComponent]
    });
    fixture = TestBed.createComponent(FreelancerOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
