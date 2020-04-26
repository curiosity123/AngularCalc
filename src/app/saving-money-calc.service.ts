import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingMoneyCalcService {


  kalkulatory: string[] = ['walutowy', 'kredytowy'];


  ypYTargetInflation = 6;
  monthlySavedMoney = 2000;
  priceOfTargetNow = 100000;
  yourWallet = 7000;
  TotalMonths = 0;
  TotalAges = 0;
  priceOfProperty = 0;

  graphData = [];
  title = 'When you save enough money for your product or service';
  type = 'LineChart';
  columnNames = ['Sth', 'Product or service price', 'Your money'];
  options = {
    pointSize: 4,
    hAxis: {
      title: 'Month',
    },
    vAxis: {
      title: 'Price',
    },
  };
  height = 600;



  constructor() {
    this.calculate('first run');
   }





  calculate(target) {
    console.log('zmienino' , target);
    this.graphData = [];
    let index = 0;
    this.TotalMonths = -1;
    const months = new Array(100);
    for (const num of months) {
      index++;
      this.graphData.push([index, this.valueOfTargetAfterMonth(index), this.savedMoneyAfter(index)]);
      if (this.valueOfTargetAfterMonth(index) > this.savedMoneyAfter(index)) {
        this.TotalMonths = index;
        this.priceOfProperty = this.valueOfTargetAfterMonth(index);
      }
      if (this.TotalMonths == 100) {
        this.TotalMonths = 999999999;
      }
    }
    this.TotalAges = Math.floor(this.TotalMonths / 12);
    this.priceOfProperty = Math.floor(this.priceOfProperty);
  }

  valueOfTargetAfterMonth(monthCount: number): number {
    const monthlyInflation = (this.ypYTargetInflation / 12) / 100;
    const temp: number = this.priceOfTargetNow * (monthlyInflation * monthCount);
    return (+this.priceOfTargetNow + +temp);
  }

  savedMoneyAfter(monthCount) {
    return (+this.yourWallet + +monthCount * this.monthlySavedMoney);
  }
}
