import { TestBed } from '@angular/core/testing';

import { BankDepositProfitsService } from './bank-deposit-profits.service';

describe('BankDepositProfitsService', () => {
  let service: BankDepositProfitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankDepositProfitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
