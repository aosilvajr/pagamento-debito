import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoUpdateComponent } from './pagamento-update.component';

describe('PagamentoUpdateComponent', () => {
  let component: PagamentoUpdateComponent;
  let fixture: ComponentFixture<PagamentoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
