import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizData } from '../data/quiz.data';
import { TQuiz, TQuizList } from '../interfaces/quiz.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  category: string;
  categoryName: string;
  quizList: TQuizList[] = [];

  constructor(private route: ActivatedRoute, private quiz: QuizData) { }

  ngOnInit() {
    this.get();
  }

  private get() {
    this.category = this.route.snapshot.paramMap.get('cat');
    this.quiz.data.subscribe((Response: TQuiz) => {
      if (Response) {
        this.categoryName = Response[this.category].categoryName;
        this.quizList = Response[this.category].quizList;
      }
    });
  }

}
