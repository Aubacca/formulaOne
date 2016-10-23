import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Here we are implementing the submitForm function.
  // All we are doing for right now is spitting out the details of the form to our console.
  submitForm(form: any): void {
    console.log('Form Data: ');
    console.log(form);
  }
}
