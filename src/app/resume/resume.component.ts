import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  downloadMyFile(){
    // const link = document.createElement('a');
    // link.setAttribute('target', '_blank');
    // link.setAttribute('href', './../../assets/alex-cutschall-resume.pdf');
    // link.setAttribute('download', `alex-cutschall-resume.pdf`);
    // document.body.appendChild(link);
    // link.click();
    // link.remove();
  }

}
