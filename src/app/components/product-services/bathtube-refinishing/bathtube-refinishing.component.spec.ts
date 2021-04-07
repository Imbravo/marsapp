import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathtubeRefinishingComponent } from './bathtube-refinishing.component';

describe('BathtubeRefinishingComponent', () => {
  let component: BathtubeRefinishingComponent;
  let fixture: ComponentFixture<BathtubeRefinishingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BathtubeRefinishingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BathtubeRefinishingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
