import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-person2',
  templateUrl: './person2.component.html',
  styleUrls: ['./person2.component.css'],
})
export class Person2Component implements OnInit {
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
    this.data.changeMessageType1('Hello from Person2');
  }

  newMessageType2() {
    this.data.changeMessageType2(2030);
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
