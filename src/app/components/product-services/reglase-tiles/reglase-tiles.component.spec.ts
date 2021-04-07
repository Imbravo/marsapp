import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglaseTilesComponent } from './reglase-tiles.component';

describe('ReglaseTilesComponent', () => {
  let component: ReglaseTilesComponent;
  let fixture: ComponentFixture<ReglaseTilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReglaseTilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglaseTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
