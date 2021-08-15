import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.css']
})
export class PageLayoutComponent {

  @Input() title = '';
  @Input() subtitle = '';
  @Input() imagePath = '';

  constructor() { }

}
