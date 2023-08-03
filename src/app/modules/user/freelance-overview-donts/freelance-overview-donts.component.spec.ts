import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOverviewDontsComponent } from './freelance-overview-donts.component';

describe('FreelanceOverviewDontsComponent', () => {
  let component: FreelanceOverviewDontsComponent;
  let fixture: ComponentFixture<FreelanceOverviewDontsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelanceOverviewDontsComponent]
    });
    fixture = TestBed.createComponent(FreelanceOverviewDontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
