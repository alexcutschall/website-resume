import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() imagePath = 'professional-photo.jpg';
  imagePathPrefix = "./../../assets/"
  fullImagePath = '';

  constructor(
    private router: Router) { }

  ngOnInit() {
    if(this.imagePath == '') {
      this.imagePath = 'professional-photo.jpg';
    }
    this.fullImagePath = this.imagePathPrefix + this.imagePath;
  }
  
  navigate(path: string) {
    this.router.navigate([ path ]);
  }
}
