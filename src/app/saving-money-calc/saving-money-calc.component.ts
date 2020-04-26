import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving-money-calc',
  templateUrl: './saving-money-calc.component.html',
  styleUrls: ['./saving-money-calc.component.scss']
})
export class SavingMoneyCalcComponent implements OnInit {


 myTitle = 'When you will be able to buy product';
  myData = [
    ['Jan',  7.0, -0.2],
    ['Feb',  6.9, 0.8],
    ['Mar',  9.5,  5.7],
    ['Apr',  14.5, 11.3],
    ['May',  18.2, 17.0],
    ['Jun',  21.5, 22.0],
    ['Jul',  25.2, 24.8],
    ['Aug',  26.5, 24.1],
    ['Sep',  23.3, 20.1],
    ['Oct',  18.3, 14.1],
    ['Nov',  13.9,  8.6],
    ['Dec',  9.6,  2.5]
  ];
  columnNames = ["Tokyo", "Your money","Product price"];
  options = {   
     hAxis: {
        title: 'Month'
     },
     vAxis:{
        title: 'Temperature'
     },
  };
  chartType =  'LineChart';
  width = 1500;
  height = 400;
 


  constructor() { }

  ngOnInit() {
  }




}
