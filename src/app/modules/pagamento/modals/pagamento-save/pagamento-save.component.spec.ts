import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoSaveComponent } from './pagamento-save.component';

describe('PagamentoSaveComponent', () => {
  let component: PagamentoSaveComponent;
  let fixture: ComponentFixture<PagamentoSaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagamentoSaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
