import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  title = 'Forms';

  constructor() { }

  ngOnInit() {
    console.log('FormComponent.ngOnInit', 'begin');
    console.log('FormComponent.ngOnInit', 'end');
  }

  ngOnDestroy() {
    console.log('FormComponent.ngOnDestroy', 'begin');
    console.log('FormComponent.ngOnDestroy', 'end');
  }
}
