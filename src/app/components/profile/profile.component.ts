import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  skillsForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.skillsForm = new FormGroup({
      skills: new FormArray([new FormControl('HTML', [Validators.required])])
    })
  }
  addControl() {
    const formArray = this.skillsForm.get('skills') as FormArray;
    const index = formArray.length;

    formArray.insert(index, new FormControl('', [Validators.required]))
  }
  remove(i) {
    const formArray = this.skillsForm.get('skills') as FormArray;

    formArray.removeAt(i)
  }
  submit() {
    console.log(this.skillsForm.value)
  }

}
