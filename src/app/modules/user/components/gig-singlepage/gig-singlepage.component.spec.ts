import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigSinglepageComponent } from './gig-singlepage.component';

describe('GigSinglepageComponent', () => {
  let component: GigSinglepageComponent;
  let fixture: ComponentFixture<GigSinglepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GigSinglepageComponent]
    });
    fixture = TestBed.createComponent(GigSinglepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
