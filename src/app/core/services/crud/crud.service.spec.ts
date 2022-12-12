import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CoreModule } from 'src/app/core/core.module';

import { CrudService } from './crud.service';

describe('CrudService', () => {
  let service: CrudService<jasmine.Any>;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    CoreModule.InjectorInstance = TestBed;

    service = new CrudService('/');
    httpClient = CoreModule.InjectorInstance?.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET method when call get()', () => {
    const spy = spyOn(httpClient, 'get').and.callThrough();
    service.get();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
