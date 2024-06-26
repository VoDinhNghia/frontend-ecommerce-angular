import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { routeList } from '../constants/constant';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';

export const routes: Routes = [
  { path: routeList.login, component: LoginComponent },
  { path: routeList.home, component: HomeComponent },
  { path: '**', component: NotfoundPageComponent }
];
