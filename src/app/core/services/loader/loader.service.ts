import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading = new BehaviorSubject<boolean>(false);

  constructor() {}

  public get isLoading(): Observable<boolean> {
    return this.loading.asObservable();
  }

  public show() {
    this.loading.next(true);
  }

  public hide() {
    this.loading.next(false);
  }
}
