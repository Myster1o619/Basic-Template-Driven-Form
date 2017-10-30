import { Component, OnInit, ViewChild } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  @ViewChild("f") form: any;
  model: SignupComponent = new SignupComponent();
  langs: string[] = [
    'English',
    'German',
    'French',
  ];

  onSubmit() {
      if (this.form.valid) {
        console.log('Form Submitted');
      }
      this.form.reset();
      
     
    
  }

  constructor() { }

  ngOnInit() {
  }

}
