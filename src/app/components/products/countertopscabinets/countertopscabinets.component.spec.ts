import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertopscabinetsComponent } from './countertopscabinets.component';

describe('CountertopscabinetsComponent', () => {
  let component: CountertopscabinetsComponent;
  let fixture: ComponentFixture<CountertopscabinetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountertopscabinetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountertopscabinetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
