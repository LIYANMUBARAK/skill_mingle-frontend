import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesAndSubcategoriesComponent } from './categories-and-subcategories.component';

describe('CategoriesAndSubcategoriesComponent', () => {
  let component: CategoriesAndSubcategoriesComponent;
  let fixture: ComponentFixture<CategoriesAndSubcategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesAndSubcategoriesComponent]
    });
    fixture = TestBed.createComponent(CategoriesAndSubcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
