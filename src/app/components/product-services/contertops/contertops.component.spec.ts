import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContertopsComponent } from './contertops.component';

describe('ContertopsComponent', () => {
  let component: ContertopsComponent;
  let fixture: ComponentFixture<ContertopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContertopsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContertopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
