import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {
  modelwork = [];

  constructor() {

  this.modelwork = [
    {
      id: 1,
      name: "Baseball and Bat",
      link: ['https://sketchfab.com/models/b65c5ceeb019486fb115e0366d4e260e/embed']
    }
  ];




  }

  ngOnInit() {
  }

}
