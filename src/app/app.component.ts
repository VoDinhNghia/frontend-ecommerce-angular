import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routeList } from '../constants/constant';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  homeRoute = routeList.home;
  loginRoute = routeList.login;
}
