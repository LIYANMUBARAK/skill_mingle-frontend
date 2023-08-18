import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GigsListingComponent } from './gigs-listing.component';

describe('GigsListingComponent', () => {
  let component: GigsListingComponent;
  let fixture: ComponentFixture<GigsListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GigsListingComponent]
    });
    fixture = TestBed.createComponent(GigsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
