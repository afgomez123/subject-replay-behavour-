import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-person1',
  templateUrl: './person1.component.html',
  styleUrls: ['./person1.component.css'],
})
export class Person1Component implements OnInit {
  message: string;
  year: number | unknown;

  currentMessage$: Subscription;
  currentyear$: Subscription;

  destroyed$ = new Subject<void>();

  constructor(private data: DataService) {}

  ngOnInit() {
    this.currentMessage$ = this.data.currentMessage
      .pipe(takeUntil(this.destroyed$))
      .subscribe((message) => (this.message = message));

    this.currentyear$ = this.data.currentYear
      .pipe(takeUntil(this.destroyed$))
      .subscribe((year) => (this.year = year));
  }

  newMessageType1() {
    this.data.changeMessageType1('Hello from Person1');
  }

  newMessageType2() {
    this.data.changeMessageType2(2040);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
