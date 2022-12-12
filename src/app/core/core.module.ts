import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import pt from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ConfirmationModalComponent } from './components/confirmation-modal/confirmation-modal.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToastComponent } from './components/toast/toast.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    PageNotFoundComponent,
    SidebarComponent,
    LayoutComponent,
    NavbarComponent,
    LoadingScreenComponent,
    ToastComponent,
    ConfirmationModalComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
  ],
  exports: [LayoutComponent],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class CoreModule {}
