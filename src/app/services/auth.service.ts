import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: string;
  loginUser(email, password) {
    localStorage.setItem('user', JSON.stringify({ email, password }))
    this.user = JSON.stringify({ email, password })
  }
  logout() {
    localStorage.removeItem('user');
    this.user = null;
  }

}
