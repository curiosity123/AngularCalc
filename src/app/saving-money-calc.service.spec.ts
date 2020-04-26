import { TestBed } from '@angular/core/testing';

import { SavingMoneyCalcService } from './saving-money-calc.service';

describe('SavingMoneyCalcService', () => {
  let service: SavingMoneyCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavingMoneyCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
