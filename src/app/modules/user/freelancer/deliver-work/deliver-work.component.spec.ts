import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverWorkComponent } from './deliver-work.component';

describe('DeliverWorkComponent', () => {
  let component: DeliverWorkComponent;
  let fixture: ComponentFixture<DeliverWorkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliverWorkComponent]
    });
    fixture = TestBed.createComponent(DeliverWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
