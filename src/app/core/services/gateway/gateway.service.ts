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
          this.toastService.success('Registro gravado com sucesso.', 'Sucesso');
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
            'Registro atualizado com sucesso.',
            'Sucesso'
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
        next: results => {
          results.length === 0 &&
            this.toastService.warning(
              'Registro não encontrado.',
              'Não foram encontrados resultados para a sua busca.'
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
    });

    return from(modalRef.result).pipe(
      first(),
      delay(1000),
      map(result => result),
      switchMap(canDelete => (canDelete ? request : NEVER)),
      tap({
        next: () => {
          this.loaderService.show();
          this.toastService.success(
            'Registro removido com sucesso.',
            'Sucesso'
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

  private handleHttpErrorResponse(error: HttpErrorResponse) {
    let errorMsg: string;

    if (error.error instanceof ErrorEvent) {
      errorMsg = `Error: ${error.error.message}`;
    } else {
      errorMsg = this.getServerErrorMessage(error);
    }

    return throwError(() => new Error(errorMsg));
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
      case 404: {
        this.toastService.error(
          'Algo deu errado!!',
          'Rota de servidor não encontrada ou desconhecida.'
        );
        return `Not Found: ${error.message}`;
      }
      case 500: {
        this.toastService.error(
          'Algo deu errado!!',
          'Erro interno de comunicação com o servidor.'
        );
        return `Internal Server Error: ${error.message}`;
      }
      case 504: {
        this.toastService.error(
          'Algo deu errado!!',
          'Tempo de processamento esgotado, tente novamente mais tarde.'
        );
        return `Gateway Timeout: ${error.message}`;
      }
      default: {
        this.toastService.error(
          'Algo deu errado!!',
          'Erro desconhecido. Tente novamente mais tarde.'
        );
        return `Unknown Server Error: ${error.message}`;
      }
    }
  }
}
