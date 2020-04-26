import { TestBed } from '@angular/core/testing';

import { SavingMoneyCalcServiceService } from './saving-money-calc-service.service';

describe('SavingMoneyCalcServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavingMoneyCalcServiceService = TestBed.get(SavingMoneyCalcServiceService);
    expect(service).toBeTruthy();
  });
});
