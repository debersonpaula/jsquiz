import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { QuizCommomModule } from './common/quiz-commom.module';
import { HomeComponent } from './home/home.component';

import { QuizDataService } from './services/quizdata.service';
import { QuizData } from './data/quiz.data';
import { MaterialModule } from './material';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    QuizCommomModule,
    AppRouting,
    MaterialModule,
  ],
  providers: [QuizDataService, QuizData],
  bootstrap: [AppComponent]
})
export class AppModule { }
