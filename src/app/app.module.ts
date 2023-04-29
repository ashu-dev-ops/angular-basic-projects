import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGurdService } from './auth-gurd.service';
import { PrivateComponent } from './private/private.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import {ReactiveFormModule}
import { ReactiveFormsModule } from '@angular/forms';
import { WeightConvertorComponent } from './weight-convertor/weight-convertor.component';
import { TodoFormComponent } from './components/todos/todo-form/todo-form.component';
import { TodoListComponent } from './components/todos/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodFormComponent } from './components/food/food-form/food-form.component';
import { FoodItemComponent } from './components/food/food-item/food-item.component';
import { WeatherComponent } from './components/weather/weather.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'counter',
    component: CounterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'food',
    component: FoodFormComponent,
  },
  {
    path: 'todo',
    component: TodoFormComponent,
  },
  {
    path: 'assign-1',
    component: WeightConvertorComponent,
  },
  {
    path: 'weather',
    component: WeatherComponent,
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGurdService],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    PrivateComponent,
    LoginComponent,
    WeightConvertorComponent,
    TodoFormComponent,
    TodoListComponent,
    FoodFormComponent,
    FoodItemComponent,
    WeatherComponent,
    HomeComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGurdService],
  bootstrap: [AppComponent],
})
export class AppModule {}
