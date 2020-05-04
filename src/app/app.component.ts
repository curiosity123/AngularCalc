import { Component, ViewChild } from '@angular/core';
import { BankDepositProfitsComponent } from './bank-deposit-profits/bank-deposit-profits.component';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NgCalc';

  eventsSubject: Subject<void> = new Subject<void>();


  @ViewChild('deposit') depositCalc ;
  @ViewChild('savingMoney') savingMoneyCalc ;
  
  refreshChildren(event) {
  this.eventsSubject.next();
  }
}
