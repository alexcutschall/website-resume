import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router  ) { }
  
  navigate(path: string) {
    this.router.navigate([ path ]);
  }
}
