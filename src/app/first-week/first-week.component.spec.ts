import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstWeekComponent } from './first-week.component';

describe('FirstWeekComponent', () => {
  let component: FirstWeekComponent;
  let fixture: ComponentFixture<FirstWeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstWeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
