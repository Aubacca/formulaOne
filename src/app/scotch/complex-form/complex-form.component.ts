import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.css']
})
export class ComplexFormComponent implements OnInit {
  // The FormGroup object as you may remember from the simple form example exposes various API’s for dealing
  // with forms. Here we are creating a new object and setting its type to FormGroup
  complexForm: FormGroup;

  // We are passing an instance of the FormBuilder to our constructor
  constructor(fb: FormBuilder) {
    // Here we are using the FormBuilder to build out our form.
    this.complexForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set
      // the value. For our example, we’ll default the gender to female.
      'firstName': '',
      'lastName': '',
      'gender': 'Female',
      'hiking': false,
      'running': false,
      'swimming': false
    });
  }

  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(value: any): void {
    console.log('Reactive Form Data: ');
    console.log(value);
  }

  ngOnInit() {
  }

}
