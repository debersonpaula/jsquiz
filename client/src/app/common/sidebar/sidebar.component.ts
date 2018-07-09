import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { QuizData } from '../../data/quiz.data';
import { TQuiz } from '../../interfaces/quiz.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia('(max-width: 720px)');
  @ViewChild(MatSidenav) sidenav: MatSidenav;

  menuData = [];

  constructor(zone: NgZone, private _router: Router, private quiz: QuizData) {
    this.mediaMatcher.addListener(mql => zone.run(() => this.mediaMatcher = mql));
  }

  ngOnInit() {
    this._router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
    this.quiz.load();
    this.quiz.data.subscribe((Response: TQuiz) => {
      if (Response) {
        this.menuData = Object.keys(Response).map(category => {
          return {
            category,
            categoryName: Response[category].categoryName,
          };
        });
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
