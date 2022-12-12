import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoFilterComponent } from './pagamento-filter.component';

describe('PagamentoFilterComponent', () => {
  let component: PagamentoFilterComponent;
  let fixture: ComponentFixture<PagamentoFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
