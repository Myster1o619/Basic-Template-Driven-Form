import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  model: SignupComponent = new SignupComponent();
  langs: string[] = [
    'English',
    'German',
    'French',
  ];

  constructor() { }

  ngOnInit() {
  }

}
