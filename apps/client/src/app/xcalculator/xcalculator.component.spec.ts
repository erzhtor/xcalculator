import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XCalculatorComponent } from './xcalculator.component';

describe('XCalculatorComponent', () => {
  let component: XCalculatorComponent;
  let fixture: ComponentFixture<XCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
