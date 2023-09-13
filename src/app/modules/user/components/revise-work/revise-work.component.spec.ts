import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseWorkComponent } from './revise-work.component';

describe('ReviseWorkComponent', () => {
  let component: ReviseWorkComponent;
  let fixture: ComponentFixture<ReviseWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviseWorkComponent]
    });
    fixture = TestBed.createComponent(ReviseWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
