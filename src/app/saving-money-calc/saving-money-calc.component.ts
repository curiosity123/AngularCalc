import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saving-money-calc',
  templateUrl: './saving-money-calc.component.html',
  styleUrls: ['./saving-money-calc.component.scss']
})
export class SavingMoneyCalcComponent implements OnInit {
 
 
 myTitle = "test";
  myData = [
    ['London', 8136000],
    ['New York', 8538000],
    ['Paris', 2244000],
    ['Berlin', 3470000],
    ['Kairo', 19500000]
  ];
  constructor() { }

  ngOnInit() {
  }




}
