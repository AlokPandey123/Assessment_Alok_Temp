import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataSubject = new BehaviorSubject<{ datetime: Date; temperature: number }[]>([]);
  data$ = this.dataSubject.asObservable();

  getData() {
    return this.dataSubject.getValue();
  }

  setData(newData: { datetime: Date; temperature: number }[]) {
    this.dataSubject.next(newData);
  }
}
