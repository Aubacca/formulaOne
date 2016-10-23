import { Component, OnInit, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
  movie: any = {
    title: 'Helvetia',
    isbn: ''
  };
  address: any = {
    street: 'Lange Gasse 8',
    firstname: '',
    lastname: ''
  };

  constructor() { }

  ngOnInit() {
    console.log('TemplateDrivenComponent.ngOnInit', 'begin');
    console.log('TemplateDrivenComponent.ngOnInit', 'end');
  }

  ngAfterViewInit() {
    console.log('TemplateDrivenComponent.ngAfterViewInit', 'begin');
    console.log('TemplateDrivenComponent.ngAfterViewInit', 'end');
  }

  ngAfterViewChecked() {
    console.log('TemplateDrivenComponent.ngAfterViewChecked', 'begin', 'end');
  }

  ngOnDestroy() {
    console.log('TemplateDrivenComponent.ngOnDestroy', 'begin');
    console.log('TemplateDrivenComponent.ngOnDestroy', 'end');
  }

  saveData (formData: NgForm) {
    console.log('saveData.saveData', 'begin', formData);
    console.log(formData.value);
    console.log('saveData.saveData', 'end');
  }
}
