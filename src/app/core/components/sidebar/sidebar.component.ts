import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

import { SideNav } from '../../models/sidenav';

const SIDENAV_MENU: SideNav[] = [
  {
    name: 'Concessão de Crédito',
    icon: 'bi bi-credit-card',
    children: [
      {
        name: 'Operações de Crédito',
        url: 'operacoes-credito',
      },
    ],
  },
  {
    name: 'Fomento',
    icon: 'bi bi-cash-coin',
    children: [
      {
        name: 'Operações SICOR',
        url: 'fomento',
      },
    ],
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements AfterContentChecked {
  @Output() toggleSideBarEvent = new EventEmitter();

  public sidenav: SideNav[] = SIDENAV_MENU;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterContentChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public toggleSideBar() {
    this.toggleSideBarEvent.emit();
  }
}
