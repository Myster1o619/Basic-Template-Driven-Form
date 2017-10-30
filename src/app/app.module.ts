import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // FormGroup,
    // FormControl,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
