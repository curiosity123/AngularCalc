import { Component, OnInit } from '@angular/core';
import { SavingMoneyCalcService } from '../saving-money-calc.service';
  import {enableProdMode} from '@angular/core';

@Component({
  selector: 'app-saving-money-calc',
  templateUrl: './saving-money-calc.component.html',
  styleUrls: ['./saving-money-calc.component.scss']
})
export class SavingMoneyCalcComponent implements OnInit {


 CalcService: SavingMoneyCalcService;

  constructor(private calcService: SavingMoneyCalcService) {

    this.CalcService = calcService;
    this.CalcService.calculate('none');
   }

  ngOnInit() {
    this.CalcService.calculate('none');
  }



  SetClick(event) {
  console.log('mozesz isc se spac');

  }




}
