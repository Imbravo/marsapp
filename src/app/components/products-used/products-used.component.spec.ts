import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsUsedComponent } from './products-used.component';

describe('ProductsUsedComponent', () => {
  let component: ProductsUsedComponent;
  let fixture: ComponentFixture<ProductsUsedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsUsedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsUsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
