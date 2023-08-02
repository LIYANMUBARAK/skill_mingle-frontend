import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerNavbarComponent } from './freelancer-navbar.component';

describe('FreelancerNavbarComponent', () => {
  let component: FreelancerNavbarComponent;
  let fixture: ComponentFixture<FreelancerNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerNavbarComponent]
    });
    fixture = TestBed.createComponent(FreelancerNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
