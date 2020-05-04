import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { BankDepositProfitsService } from '../bank-deposit-profits.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-bank-deposit-profits',
  templateUrl: './bank-deposit-profits.component.html',
  styleUrls: ['./bank-deposit-profits.component.scss']
})
export class BankDepositProfitsComponent implements OnInit, OnDestroy {

  Service: BankDepositProfitsService;
  private eventsSubscription: Subscription;

  @Input() events: Observable<void>;


  constructor(service: BankDepositProfitsService) {
    this.Service = service;
    this.Service.calculate(null);
  }

  ngOnInit(): void {
    this.Service.calculate(null);
    this.eventsSubscription = this.events.subscribe(() => this.myFunction(null));
  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  myFunction(event) {
    this.Service.calculate(null);

  }
}
