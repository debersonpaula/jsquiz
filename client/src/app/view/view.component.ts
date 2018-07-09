import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizData } from '../data/quiz.data';
import { TQuizList } from '../interfaces/quiz.interface';

import * as codemirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit, AfterViewInit {

  category: string;
  id: number;
  data: TQuizList = {
    title: '',
    id: 0,
    description: '',
    level: 0,
    parameters: '',
    testCases: [],
  };
  @ViewChild('codearea') codearea;
  codetext: codemirror.EditorFromTextArea;

  testAction = {};


  constructor(private route: ActivatedRoute, private quiz: QuizData) { }

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('cat');
    this.id = parseInt(this.route.snapshot.paramMap.get('id'), 0);
    this.quiz.data.subscribe((Response) => {
      if (Response) {
        const list = Response[this.category].quizList.filter(value => {
          return value.id === this.id;
        });
        if (list.length > 0) {
          this.data = { ...this.data, ...list[0] };
        }
      }
    });

    this.codetext = codemirror.fromTextArea(this.codearea.nativeElement, {
      lineNumbers: true,
      mode: 'javascript',
    });
  }

  ngAfterViewInit() {
    // this.codetext.refresh();
  }

  test() {
    this.testAction = {};
    const usercode = this.codetext.getValue();
    const testcase = this.data.testCases[0];
    const params = this.data.parameters.split(',');
    const inputValues = testcase.input.split(',');
    const variables = params.length > 0 ? params.reduce((total, varname, index) => {
      if (varname) {
        total += 'var ' + varname + '=' + inputValues[index] + ';';
      }
      return total;
    }, '') : '';

    const fn = `()=>{
      ${variables}
      ${usercode}
    }`;

    try {
      const check = eval(fn);
      const result = check();

      if (result.toString() !== testcase.output) {
        this.testAction['fail'] = {
          expected: testcase.output,
          received: result
        };
      } else {
        this.testAction['success'] = {
          expected: testcase.output,
          received: result
        };
      }
    } catch (error) {
      // console.log('eval code', error);
      this.testAction['error'] = error + '/' + fn;
    }
  }

  submit() {

  }
}
