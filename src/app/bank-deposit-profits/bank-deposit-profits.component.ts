import { Component, OnInit } from '@angular/core';
import { BankDepositProfitsService } from '../bank-deposit-profits.service';

@Component({
  selector: 'app-bank-deposit-profits',
  templateUrl: './bank-deposit-profits.component.html',
  styleUrls: ['./bank-deposit-profits.component.scss']
})
export class BankDepositProfitsComponent implements OnInit {

  Service: BankDepositProfitsService;

  constructor(service: BankDepositProfitsService) {
    this.Service = service;
  }

  ngOnInit(): void {
    this.Service.calculate(null);
  }
  myFunction(event) {


  }
}
