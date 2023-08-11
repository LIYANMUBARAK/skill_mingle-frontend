import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGigComponent } from './create-gig.component';

describe('CreateGigComponent', () => {
  let component: CreateGigComponent;
  let fixture: ComponentFixture<CreateGigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGigComponent]
    });
    fixture = TestBed.createComponent(CreateGigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
