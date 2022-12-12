import { Component, TemplateRef } from '@angular/core';

import { ToastInfo, ToastService } from '../../services/toast/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  constructor(public toastService: ToastService) {}

  public get toasts() {
    return this.toastService.toasts;
  }

  public remove(toast: ToastInfo) {
    this.toastService.remove(toast);
  }

  public isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }
}
