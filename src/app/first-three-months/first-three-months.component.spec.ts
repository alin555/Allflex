import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstThreeMonthsComponent } from './first-three-months.component';

describe('FirstThreeMonthsComponent', () => {
  let component: FirstThreeMonthsComponent;
  let fixture: ComponentFixture<FirstThreeMonthsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstThreeMonthsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstThreeMonthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
