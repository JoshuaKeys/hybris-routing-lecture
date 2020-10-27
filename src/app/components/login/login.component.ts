import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('joshua.oguma@test.com'),
      password: new FormControl('mypassword')
    })
  }

  loginUser() {
    const { email, password } = this.loginForm.value;
    if (this.loginForm.valid) {
      this.authService.loginUser(email, password);
      this.router.navigate(['/home']).then(val => {
        console.log('after click', val);
      }).catch(err => console.error(err))
    }
  }

}
