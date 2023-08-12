import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryEditModalComponent } from './subcategory-edit-modal.component';

describe('SubcategoryEditModalComponent', () => {
  let component: SubcategoryEditModalComponent;
  let fixture: ComponentFixture<SubcategoryEditModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubcategoryEditModalComponent]
    });
    fixture = TestBed.createComponent(SubcategoryEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
