import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankDepositProfitsService {


  CurrentMoney = 100000;
  Inflation = 4.5;


  DepositList: { money: number, interest: number }[] =
    [
    ];

  TempMoney = 0;
  TempInterest = 0;

  MonthlyLoss = 0;
  MonthlyEarn = 0;
  SummaryLoss = 0;

  // googlechart
  Title = "Inflation loss and deposit profits";
  Type = 'PieChart';
  Data = [];
  columnNames = ['Product or service price', 'Your money'];

  Height = 500;
  options = {
   
    colors: ['#de425b','#004c6d',
    '#2c6480',
    '#4c7d92',
    '#6b96a6',
    '#8bb0ba',
    '#accad0',
    '#cee4e6',
    '#f1ffff']
  };


  constructor() {
    this.calculate("test");
  }


  calculate(event) {
    this.MonthlyLoss = Number(((this.CurrentMoney * ((this.Inflation / 100) * 0.81)) / 12).toFixed(1));
    this.MonthlyEarn = 0;
    this.Data = [];
    let temp = [];
    for (let i = 0; i < this.DepositList.length; i++) {
      const data = (this.DepositList[i].money * ((this.DepositList[i].interest / 100) * 0.81)) / 12;
      temp.push([this.DepositList[i].money.toString()+'-' +this.DepositList[i].interest.toString()+ '%', data]);
      this.MonthlyEarn = this.MonthlyEarn + (this.DepositList[i].money * ((this.DepositList[i].interest / 100) * 0.81)) / 12;
    }
    this.MonthlyEarn = Number(this.MonthlyEarn.toFixed(1));

    this.SummaryLoss = this.MonthlyLoss - this.MonthlyEarn;
    this.Data.push(['loss', this.SummaryLoss]);
    temp.forEach(x=> this.Data.push(x));

  }

  AddNew(event) {
    this.DepositList.push({ money: this.TempMoney, interest: this.TempInterest });
    this.TempMoney = 0;
    this.TempInterest = 0;
    this.calculate(null);
  }

  Remove(event) {
    console.log(event);
    this.DepositList.splice(event, 1);
    this.TempMoney = 0;
    this.TempInterest = 0;
    this.calculate(null);
  }

}
