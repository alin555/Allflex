import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstDayComponent } from './first-day.component';

describe('FirstDayComponent', () => {
  let component: FirstDayComponent;
  let fixture: ComponentFixture<FirstDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
