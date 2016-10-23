import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-season-search',
  templateUrl: './season-search.component.html',
  styleUrls: ['./season-search.component.css']
})
export class SeasonSearchComponent implements OnInit {
  @Output() onSearch: EventEmitter<number> = new EventEmitter<number>();
  @Output() onReset: EventEmitter<boolean> = new EventEmitter<boolean>();
//  searchForm: FormGroup;
  loading: boolean = false;
  title: string = 'Season Search';

  forms: FormGroup;

  constructor() {}

  ngOnInit() {
    console.log('SeasonSearchComponent.ngOnInit', 'begin');
//    this.searchForm = this.builder.group({ limit: [ '25' ], offset: [ '0' ] });
    console.log('SeasonSearchComponent.ngOnInit', 'end');
  }

  submit(event) {
    console.log('SeasonSearchComponent.submit', 'begin');
    event.preventDefault();
    this.loading = true;
    this.onSearch.emit(4711);
    // if (this.searchForm.valid) {
    //   this.loading = true;
    //   let ownIdValue = this.searchForm.controls['ownId'].value;
    //   this.onsearch.emit(parseInt(ownIdValue.replace(new RegExp('[^0-9]', 'g'), ''), 10));
    // }
    console.log('SeasonSearchComponent.submit', 'end');
  }

  reset (event) {
    console.log('SeasonSearchComponent.reset', 'begin');
    event.preventDefault();
//    this.searchForm.reset();
    this.done(event);
    this.onReset.emit(true);
    console.log('SeasonSearchComponent.reset', 'end');
  }

  done(event) {
    console.log('SeasonSearchComponent.done', 'begin', event);
    this.loading = false;
    console.log('SeasonSearchComponent.done', 'end');
  }
}
