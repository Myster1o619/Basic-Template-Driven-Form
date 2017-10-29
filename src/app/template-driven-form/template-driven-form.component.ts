import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {

  langs: string[] = [
    'English',
    'German',
    'French',
  ];

  constructor() { }

  ngOnInit() {
  }

}
