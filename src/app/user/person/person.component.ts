import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  forms: FormGroup;

  title: string = 'Person Details';

  constructor(@Inject(FormBuilder) fb: FormBuilder) {
    this.forms = fb.group({
      name: fb.group({
        first: ['Nancy', Validators.minLength(5)],
        last: ['Drew', Validators.compose([Validators.minLength(5), Validators.required])],
      }),
      email: '',
    });
   }

  ngOnInit() {
  }

}
