import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOverviewComponent } from './freelance-overview.component';

describe('FreelanceOverviewComponent', () => {
  let component: FreelanceOverviewComponent;
  let fixture: ComponentFixture<FreelanceOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelanceOverviewComponent]
    });
    fixture = TestBed.createComponent(FreelanceOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
