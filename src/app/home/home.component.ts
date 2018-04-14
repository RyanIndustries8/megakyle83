import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // intro: object [];

  constructor(private router: Router) {
    // this.intro = [
    //   {
    //     id: ,
    //     title: "",
    //     blurp: "",
    //     routerLink: ['']
    //   }
    // ]
  }

  ngOnInit() {
  }

  aboutPage() {
      this.router.navigate(['about']);
    }
}
