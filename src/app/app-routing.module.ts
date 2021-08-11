import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CodingPhilosophiesComponent } from './coding-philosophies/coding-philosophies.component';
import { LandingComponent } from './landing/landing.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'coding-philosophies', component: CodingPhilosophiesComponent },
  { path: 'resume', component: ResumeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
