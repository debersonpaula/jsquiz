import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizDataService } from '../services/quizdata.service';
import { TQuiz } from '../interfaces/quiz.interface';

@Injectable()
export class QuizData {
    private _source = new BehaviorSubject<TQuiz | undefined>(undefined);
    private _data = this._source.asObservable();

    constructor(private service: QuizDataService) { }

    get data() {
        return this._data;
    }

    public load() {
        this.service.getQuizList().subscribe((response) => {
            // console.log(response);
            this._source.next(response);
        }, (error) => {
            console.log(error);
        });
    }
}
