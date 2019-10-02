import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private searchSource = new Subject<string>();
  search = this.searchSource.asObservable();

  announceSearch(searchTerm: string) {
    this.searchSource.next(searchTerm);
  }

  constructor() { }
}
