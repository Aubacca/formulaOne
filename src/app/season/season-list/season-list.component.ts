import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SeasonService } from '../../service/season.service';
import { SeasonData } from '../../models/SeasonData';

@Component({
  selector: 'app-season-list',
  templateUrl: './season-list.component.html',
  styleUrls: ['./season-list.component.css'],
  providers: [SeasonService]
})
export class SeasonListComponent implements OnInit {
  seasonList: SeasonData[] = [];
  @Output() onDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  title: string = 'Seasons List';

  constructor(private seasonService: SeasonService) { }

  ngOnInit() {
    console.log('SeasonListComponent.ngOnInit', 'begin');
    console.log('SeasonListComponent.ngOnInit', 'end');
  }

  loadSeasonData (theLimit: number) {
    console.log('SeasonListComponent.loadSeasonData', 'begin', theLimit);
    this.seasonService.getAll()
      .subscribe(data => {
        console.log('SeasonListComponent.loadSeasonData');
        console.log(data);
        this.seasonList = data;
      },
      error => { alert(error); },
      () => {
        console.log('SeasonListComponent.loadSeasonData', 'begin');
        console.log('SeasonListComponent.loadSeasonData', 'Complete');
        this.onDone.emit(true);
        console.log('SeasonListComponent.loadSeasonData', 'end');
      }
    );
    console.log('SeasonListComponent.loadSeasonData', 'end');
  }

  reset (doReset: boolean) {
    console.log('SeasonListComponent.reset', 'begin', doReset);
    this.seasonList = [];
    console.log('SeasonListComponent.reset', 'end');
  }
}
