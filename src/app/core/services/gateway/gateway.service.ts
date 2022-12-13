import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  delay,
  first,
  from,
  map,
  NEVER,
  Observable,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { ToastService } from 'src/app/core/services/toast/toast.service';

import { ConfirmationModalComponent } from '../../components/confirmation-modal/confirmation-modal.component';
import { Page } from '../../models/page';
import { LoaderService } from '../loader/loader.service';

@Injectable({
  providedIn: 'root',
})
export class GatewayService {
  constructor(
    private modalService: NgbModal,
    private toastService: ToastService,
    private loaderService: LoaderService
  ) {}

  public create<T>(request: Observable<Page<T>>) {
    this.loaderService.show();

    return request.pipe(
      first(),
      delay(1000),
      map(data => data.dados),
      tap({
        next: () => {
          this.toastService.success('Sucesso', 'Registro gravado com sucesso.');
        },
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  public update<T>(request: Observable<Page<T>>) {
    this.loaderService.show();

    return request.pipe(
      first(),
      delay(1000),
      map(data => data.dados),
      tap({
        next: () => {
          this.toastService.success(
            'Sucesso',
            'Registro atualizado com sucesso.'
          );
        },
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  public search<T>(request: Observable<Page<T[]>>) {
    this.loaderService.show();

    return request.pipe(
      first(),
      delay(1000),
      map(data => data.dados),
      tap({
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  public get<T>(request: Observable<Page<T[]>>) {
    this.loaderService.show();

    return request.pipe(
      first(),
      delay(1000),
      map(data => data.dados),
      tap({
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  public retrieve<T>(request: Observable<Page<T>>) {
    this.loaderService.show();

    return request.pipe(
      first(),
      delay(1000),
      map(data => data.dados),
      tap({
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  public delete(request: Observable<void>) {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      size: 'md',
      backdrop: true,
      centered: true,
    });

    return from(modalRef.result).pipe(
      first(),
      delay(1000),
      map(result => {
        this.loaderService.show();
        return result;
      }),
      switchMap(canDelete => (canDelete ? request : NEVER)),
      tap({
        next: () => {
          this.toastService.success(
            'Sucesso',
            'Registro removido com sucesso.'
          );
        },
        error: error => {
          this.handleHttpErrorResponse(error);
        },
        finalize: () => {
          this.loaderService.hide();
        },
      })
    );
  }

  private handleHttpErrorResponse(httpErrorResponse: HttpErrorResponse) {
    let errorMsg: string;

    if (httpErrorResponse.error.erro) {
      errorMsg = `Error: ${httpErrorResponse.error.erro}`;
      this.toastService.error('Ooops! Algo deu errado.', errorMsg);
    } else {
      errorMsg = this.getServerErrorMessage(httpErrorResponse);
    }

    return throwError(() => new Error(errorMsg));
  }

  private getServerErrorMessage(httpErrorResponse: HttpErrorResponse): string {
    switch (httpErrorResponse.status) {
      case 404: {
        this.toastService.error(
          'Ooops! Algo deu errado.',
          'Rota de servidor não encontrada ou desconhecida. tente novamente mais tarde.'
        );
        return `Not Found: ${httpErrorResponse.message}`;
      }
      case 500: {
        this.toastService.error(
          'Ooops! Algo deu errado.',
          'Erro interno de comunicação com o servidor. tente novamente mais tarde.'
        );
        return `Internal Server Error: ${httpErrorResponse.message}`;
      }
      case 504: {
        this.toastService.error(
          'Ooops! Algo deu errado.',
          'Tempo de processamento do servidor esgotado, tente novamente mais tarde.'
        );
        return `Gateway Timeout: ${httpErrorResponse.message}`;
      }
      default: {
        this.toastService.error(
          'Ooops! Algo deu errado.',
          'Erro desconhecido. Tente novamente mais tarde.'
        );
        return `Unknown Server Error: ${httpErrorResponse.message}`;
      }
    }
  }
}
