import { Component, HostListener } from '@angular/core';

const WINDOW_BREAKPOINT_LG = 1200;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public toggleSidebar = this.windowLessThanBreakpoint(WINDOW_BREAKPOINT_LG);

  @HostListener('window:resize', ['$event'])
  public onResize(event: { target: { innerWidth: number } }) {
    this.toggleSidebar = event.target.innerWidth < WINDOW_BREAKPOINT_LG;
  }

  public toggleSideBar() {
    this.toggleSidebar = !this.toggleSidebar;
  }

  public closeSideBar() {
    this.toggleSidebar = this.windowLessThanBreakpoint(WINDOW_BREAKPOINT_LG);
  }

  private windowLessThanBreakpoint(breakpoint: number): boolean {
    return window.innerWidth < breakpoint;
  }
}
