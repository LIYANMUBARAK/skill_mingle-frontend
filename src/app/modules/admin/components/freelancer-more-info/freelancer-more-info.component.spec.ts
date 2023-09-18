import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerMoreInfoComponent } from './freelancer-more-info.component';

describe('FreelancerMoreInfoComponent', () => {
  let component: FreelancerMoreInfoComponent;
  let fixture: ComponentFixture<FreelancerMoreInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerMoreInfoComponent]
    });
    fixture = TestBed.createComponent(FreelancerMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
