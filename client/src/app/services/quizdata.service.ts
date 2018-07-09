import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TQuiz } from '../interfaces/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {
  constructor(private http: HttpClient) { }

  public getQuizList(): Observable<TQuiz> {
    return <any>(this.http.get('http://localhost:3000/quiz'));
  }
}
