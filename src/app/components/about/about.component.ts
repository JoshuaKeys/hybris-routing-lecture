import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  userData: {
    name: string;
    email: string;
  }
  constructor(private activatedRoute: ActivatedRoute, private location: Location) { }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
    this.userData = this.activatedRoute.snapshot.queryParams as any;
  }

}
