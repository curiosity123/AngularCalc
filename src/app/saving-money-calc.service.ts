import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SavingMoneyCalcService {


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
   
    hAxis: {
      title: 'Month',

      textStyle: { color: '#eee' },
      titleTextStyle: { color: '#eee' },
      gridlines: { color: '#ccc' }
    },
    vAxis: {
      title: 'Price',
      textStyle: { color: '#eee' },
      titleTextStyle: { color: '#eee' },
      gridlines: { color: '#ccc' }
    },
    chartArea: {
      backgroundColor: '#333'

    },
    colors: ['#de425b','#004c6d'],
    backgroundColor: { fill: 'transparent' },
    titleTextStyle: { color: '#eee' },
    gridlines: { color: '#ccc' },
    legend: {
      textStyle: { color: '#eee' }
    }
  };
  height = 600;



  constructor() {
    this.calculate('first run');
  }





  calculate(target) {

    this.graphData = [];
    this.TotalMonths = -1;


    for (var index = 0; index < 1000; index++) {


      if (this.valueOfTargetAfterMonth(index) > this.savedMoneyAfter(index)) {
        this.TotalMonths = index;
        this.priceOfProperty = this.valueOfTargetAfterMonth(index);
      }

      if (index < this.TotalMonths + 5) {
        this.graphData.push([index, this.valueOfTargetAfterMonth(index), this.savedMoneyAfter(index)]);
      }

      if (this.TotalMonths > 900) {
        this.TotalMonths = Infinity ;
        this.TotalAges = Infinity ;
        this.priceOfProperty = -1;
        break;
      }

      this.TotalAges = Number((this.TotalMonths / 12).toFixed(1));
      this.priceOfProperty = Math.round(this.priceOfProperty);
    }

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
