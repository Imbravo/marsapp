import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilestopComponent } from './tilestop.component';

describe('TilestopComponent', () => {
  let component: TilestopComponent;
  let fixture: ComponentFixture<TilestopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilestopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
