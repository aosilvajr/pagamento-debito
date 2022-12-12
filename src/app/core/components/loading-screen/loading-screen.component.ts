import { Component } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';

import { LoaderService } from '../../services/loader/loader.service';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
})
export class LoadingScreenComponent {
  public isLoading!: boolean;

  constructor(private loaderService: LoaderService) {
    this.subscribeToLoader();
  }

  private subscribeToLoader() {
    this.loaderService.isLoading.pipe(distinctUntilChanged()).subscribe(res => {
      setTimeout(() => (this.isLoading = res));
    });
  }
}
