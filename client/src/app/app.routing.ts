import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { pagename: 'Home' } },
  { path: 'list/:cat', component: ListComponent, data: { pagename: 'Lista de Desafios' } },
  { path: 'view/:cat/:id', component: ViewComponent, data: { pagename: 'Desafio' } },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouting { }
