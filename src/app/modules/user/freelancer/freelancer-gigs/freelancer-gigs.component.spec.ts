import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelancerGigsComponent } from './freelancer-gigs.component';

describe('FreelancerGigsComponent', () => {
  let component: FreelancerGigsComponent;
  let fixture: ComponentFixture<FreelancerGigsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelancerGigsComponent]
    });
    fixture = TestBed.createComponent(FreelancerGigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
