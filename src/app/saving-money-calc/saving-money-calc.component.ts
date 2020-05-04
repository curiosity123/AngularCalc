import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SavingMoneyCalcService } from '../saving-money-calc.service';
import { enableProdMode } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-saving-money-calc',
  templateUrl: './saving-money-calc.component.html',
  styleUrls: ['./saving-money-calc.component.scss']
})
export class SavingMoneyCalcComponent implements OnInit,OnDestroy {

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;

  CalcService: SavingMoneyCalcService;

  constructor(private calcService: SavingMoneyCalcService) {

    this.CalcService = calcService;
    this.CalcService.calculate('none');
  }
  ngOnDestroy(): void {
    this.eventsSubscription.unsubscribe();
  }

  ngOnInit() {
    this.CalcService.calculate('none');
    this.eventsSubscription = this.events.subscribe(() => this.myFunction(null));
  }



  myFunction(event) {
    this.CalcService.calculate('');

  }




}
