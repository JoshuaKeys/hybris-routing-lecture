import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  detailsForm: FormGroup;
  ngOnInit() {
    this.detailsForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl('')
    })
  }
  goToAbout() {

    this.router.navigate(['/about'], {
      queryParams: {
        name: this.detailsForm.get('name').value,
        email: this.detailsForm.get('email').value
      }
    })
  }

}
