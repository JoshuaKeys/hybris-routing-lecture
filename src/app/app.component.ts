import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hybris-routing';

  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
  ngOnInit() {
    const user = localStorage.getItem('user');
    if (user) {
      this.authService.user = user;
    }
  }
  constructor(public authService: AuthService, private router: Router) { }
}
