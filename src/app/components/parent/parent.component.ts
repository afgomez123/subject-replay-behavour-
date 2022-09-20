import { Component, OnInit } from '@angular/core';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
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

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
