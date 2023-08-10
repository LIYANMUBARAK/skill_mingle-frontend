import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreelanceOverviewDosComponent } from './freelance-overview-dos.component';

describe('FreelanceOverviewDosComponent', () => {
  let component: FreelanceOverviewDosComponent;
  let fixture: ComponentFixture<FreelanceOverviewDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FreelanceOverviewDosComponent]
    });
    fixture = TestBed.createComponent(FreelanceOverviewDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
