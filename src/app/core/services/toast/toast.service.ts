import { Injectable } from '@angular/core';

export type ToastInfo = {
  icon: string;
  header: string;
  body: string;
  classname: string;
  delay?: number;
};

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  public toasts: ToastInfo[] = [];

  public info(header: string, body: string, delay?: number) {
    this.show('bi bi-info-circle', header, body, 'text-bg-info', delay);
  }

  public error(header: string, body: string, delay?: number) {
    this.show('bi bi-x-octagon', header, body, 'text-bg-danger', delay);
  }

  public warning(header: string, body: string, delay?: number) {
    this.show(
      'bi bi-exclamation-triangle',
      header,
      body,
      'text-bg-warning',
      delay
    );
  }

  public success(header: string, body: string, delay?: number) {
    this.show('bi bi-check2-all', header, body, 'text-bg-success', delay);
  }

  public remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t !== toast);
  }

  public clear() {
    this.toasts.splice(0, this.toasts.length);
  }

  private show(
    icon: string,
    header: string,
    body: string,
    classname: string,
    delay?: number
  ) {
    this.toasts.push({ icon, header, body, classname, delay });
  }
}
