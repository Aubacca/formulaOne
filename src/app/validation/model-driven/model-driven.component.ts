import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css']
})
export class ModelDrivenComponent implements OnInit, OnDestroy {
  title = 'Form: Model Driven Validation';
  loginForm: FormGroup;
  username: FormControl;
  password: FormControl;
  domain: FormControl;
  zip: FormControl;

  constructor(fBuilder: FormBuilder) {
    this.username = new FormControl('pro',  [
      Validators.required,
      Validators.minLength(5)
    ]);
    this.password = new FormControl('', [Validators.required, this.hasExclamationMark, this.hasPunctuation('&', 'ampersandRequired')]);
    this.domain = new FormControl('Basel', []);
    this.zip = new FormControl(null, Validators.pattern('[A-Za-z]{5}'));
    this.loginForm = fBuilder.group({
      username: this.username,
      password: this.password,
      domain: this.domain,
      zip: this.zip
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('ModelDrivenComponent.ngOnDestroy', 'begin');
    console.log('ModelDrivenComponent.ngOnDestroy', 'end');
  }

  doLogin () {
    console.log(this.loginForm.value);
    // Attempt Logging in...
  }

  hasExclamationMark (input: FormControl): any {
    const hasExclamation = input.value.indexOf('!') >= 0;
    return hasExclamation ? null : { needsExclamation: true };
  }

  hasPunctuation (punctuation: string, errorType: string) {
    return function (input: FormControl) {
      return input.value.indexOf(punctuation) >= 0 ?
          null :
          { [errorType]: true };
    };
  }

  partialUpdate () {
    this.loginForm.patchValue({
      'username': 'Keller',
      'domain': 'Teller',
      'zip': 'AbCdE'
    });
  }

  fullUpdate () {
    this.loginForm.setValue({
      'username': null,
      'password': '1234567890&!',
      'domain': null,
      'zip': null
    });
  }

  resetForm () {
    this.loginForm.reset({'password': ''});
  }
}
