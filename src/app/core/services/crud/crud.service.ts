import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Page } from '../../models/page';
import { HttpUtils } from '../../utils/http-utils';
import { GatewayService } from '../gateway/gateway.service';

export class CrudService<T> {
  protected readonly api: string = environment.api;

  protected http: HttpClient = inject(HttpClient);
  protected gatewayService: GatewayService = inject(GatewayService);

  constructor(private path?: string) {}

  public get(extra?: string): Observable<T[]> {
    const url = this.api + this.buildPath(extra);
    const request = this.http.get<Page<T[]>>(url);
    return this.gatewayService.get<T>(request);
  }

  public create(item: T) {
    const url = this.api + this.buildPath();
    const request = this.http.post<Page<T>>(url, item);
    return this.gatewayService.create<T>(request);
  }

  public update(id: number, item: T) {
    const url = this.api + this.buildPath(`/${id}`);
    const request = this.http.put<Page<T>>(url, item);
    return this.gatewayService.update<T>(request);
  }

  public delete(id: number): Observable<void> {
    const url = this.api + this.buildPath(`/${id}`);
    const request = this.http.delete<void>(url);
    return this.gatewayService.delete(request);
  }

  public retrive(id: number | string): Observable<T> {
    const url = this.api + this.buildPath(`/${id}`);
    const request = this.http.get<Page<T>>(url);
    return this.gatewayService.retrieve<T>(request);
  }

  public search(
    params: { [name: string]: any },
    extra?: string,
    headers?: HttpHeaders
  ) {
    const httpParams = HttpUtils.buildHttpParams(params);
    const url = this.api + this.buildPath(extra);
    const request = this.http.get<Page<T[]>>(url, {
      params: httpParams,
      headers,
    });
    return this.gatewayService.search<T>(request);
  }

  /**
   * Constroi o path a ser usado para as chamadas REST.
   * Por padrão apenas o próprio valor do path é retornado.
   *
   * @param extra informação extra para criação do path.
   */
  protected buildPath(extra: string = '') {
    return this.path + extra;
  }
}
