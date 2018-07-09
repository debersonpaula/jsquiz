import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, RoutesRecognized  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentPage: string;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private _router: Router) {
    _router.events.subscribe( event => {
      if (event instanceof RoutesRecognized) {
        const route = event.state.root.firstChild;
        this.currentPage = route.data.pagename;
      }
    });
  }

  ngOnInit() {
  }

}
