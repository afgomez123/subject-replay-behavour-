import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  private messageYear = new ReplaySubject(2050);
  currentYear = this.messageYear.asObservable();

  changeMessageType1(message: string) {
    this.messageSource.next(message);
  }

  changeMessageType2(year: number) {
    this.messageYear.next(year);
  }
}
