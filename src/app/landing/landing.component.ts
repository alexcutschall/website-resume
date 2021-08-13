import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  title = 'Alex Cutschall';
  subtitle = 'Programmer | Learner | Website Tinkerer'
  constructor() { }

  ngOnInit() {
  }

}
