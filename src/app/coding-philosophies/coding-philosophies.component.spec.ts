import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPhilosophiesComponent } from './coding-philosophies.component';

describe('CodingPhilosophiesComponent', () => {
  let component: CodingPhilosophiesComponent;
  let fixture: ComponentFixture<CodingPhilosophiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingPhilosophiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingPhilosophiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
