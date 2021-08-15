import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'alex-website-resume';
  constructor(private titleService: Title) {
    this.titleService.setTitle("Alex Cutschall");
  }
}
