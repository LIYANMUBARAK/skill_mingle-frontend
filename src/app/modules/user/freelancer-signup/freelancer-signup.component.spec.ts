import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerSignupComponent } from './freelancer-signup.component';

describe('FreelancerSignupComponent', () => {
  let component: FreelancerSignupComponent;
  let fixture: ComponentFixture<FreelancerSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerSignupComponent]
    });
    fixture = TestBed.createComponent(FreelancerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
