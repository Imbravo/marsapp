import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathtubeReglazingComponent } from './bathtube-reglazing.component';

describe('BathtubeReglazingComponent', () => {
  let component: BathtubeReglazingComponent;
  let fixture: ComponentFixture<BathtubeReglazingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathtubeReglazingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BathtubeReglazingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
