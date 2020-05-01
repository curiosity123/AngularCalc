import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDepositProfitsComponent } from './bank-deposit-profits.component';

describe('BankDepositProfitsComponent', () => {
  let component: BankDepositProfitsComponent;
  let fixture: ComponentFixture<BankDepositProfitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDepositProfitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDepositProfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
