import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingMoneyCalcComponent } from './saving-money-calc.component';

describe('SavingMoneyCalcComponent', () => {
  let component: SavingMoneyCalcComponent;
  let fixture: ComponentFixture<SavingMoneyCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingMoneyCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingMoneyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
