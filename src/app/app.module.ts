import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent],
  imports: [CoreModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
