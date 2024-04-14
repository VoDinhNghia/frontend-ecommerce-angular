import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeList } from '../constants/constant';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  homeRoute = routeList.home;
  loginRoute = routeList.login;
}
