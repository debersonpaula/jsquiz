import { Component, ViewChild } from '@angular/core';
import { SidebarComponent } from './common/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidebar') sidebar: SidebarComponent;
}
