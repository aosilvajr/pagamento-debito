import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/views/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagamento-debito',
    pathMatch: 'full',
  },
  {
    path: 'pagamento-debito',
    title: 'Pagamento | Lista Pagamentos',
    loadChildren: () =>
      import('./modules/pagamento/pagamento.module').then(
        m => m.PagamentoModule
      ),
  },
  {
    path: '**',
    title: 'Pagamento | Não Encontrado',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
