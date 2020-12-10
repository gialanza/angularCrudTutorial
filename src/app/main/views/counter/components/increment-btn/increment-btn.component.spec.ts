import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementBtnComponent } from './increment-btn.component';

describe('IncrementBtnComponent', () => {
  let component: IncrementBtnComponent;
  let fixture: ComponentFixture<IncrementBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncrementBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
