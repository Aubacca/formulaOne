import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-zepas-master',
  templateUrl: './zepas-master.component.html',
  styleUrls: ['./zepas-master.component.css']
})
export class ZepasMasterComponent implements OnInit {
  brokerForm: FormGroup;
  title = 'Grunddaten des Vertriebspartners';
  currentDate = new Date().toLocaleDateString('de');
  partnerName: string;

  constructor(fb: FormBuilder) {
    this.partnerName = 'Kessler'; // Value for partnerName should come via ZEPAS call.
    // Init form builder.
    this.brokerForm = fb.group({
      'startDate': [this.currentDate, [Validators.required, this.validDateFormat]],
      'partnerName': [{value: this.partnerName, disabled: true}, Validators.required]
    });
  }

  ngOnInit() {
  }

  /** Save data to the database. */
  submitForm(value: any) {
    console.log('value=', value);
    console.log('this.brokerForm.dirty=', this.brokerForm.dirty);
    console.log('this.brokerForm.valid=', this.brokerForm.valid);

    console.log(this.brokerForm);
  }

  validDateFormat (input: FormControl) {
    const dateFormatPattern = /^\d{1,2}\.\d{1,2}\.\d{2,4}$/;
    console.log('input.value=', input.value);
//    const momentDate = moment().format('DD.MM.YYYY');
    const momentDate = moment(input.value, 'D.M.YYYY');
    console.log('momentDate=', momentDate);
    console.log('momentDate.isValid()=', momentDate.isValid());
/*
    let valid = true;

    const inputDate = input.value.replace('/./g', '');

    const inputMonth = parseInt(inputDate.substring(0, 2), 10);
    const inputDay   = parseInt(inputDate.substring(2, 4), 10);
    const inputYear  = parseInt(inputDate.substring(4), 10);

    if ((inputMonth < 1) || (inputMonth > 12)) {valid = false;
    } else if ((inputDay < 1) || (inputDay > 31)) {valid = false;
    } else if (((inputMonth === 4) || (inputMonth === 6) || (inputMonth === 9) || (inputMonth === 11)) && (inputDay > 30)) {valid = false;
    } else if ((inputMonth === 2) && (((inputYear % 400) === 0) || ((inputYear % 4) === 0)) && ((inputYear % 100) !== 0)
      && (inputDay > 29)) {valid = false;
    } else if ((inputMonth === 2) && ((inputYear % 100) === 0) && (inputDay > 29)) {valid = false;
    } else if ((inputMonth === 2) && (inputDay > 28)) {valid = false;
    }

    console.log('inputDate=', inputDate);
    console.log('inputMonth=', inputMonth);
    console.log('inputDay=', inputDay);
    console.log('inputYear=', inputYear);
    console.log('valid=', valid);
*/


//    return input.value !== '' && input.value.match(dateFormatPattern) ? null : { validDateFormat: true };
    return input.value.match(dateFormatPattern) && momentDate.isValid() ? null : { validDateFormat: true };
  }

}
