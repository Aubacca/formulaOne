import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { RaceService } from '../../service/race.service';
import { RaceData } from '../../models/RaceData';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.css'],
  providers: [RaceService]
})
export class RaceListComponent implements OnInit {
  raceList: RaceData[] = [];
  @Output() onDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  title: string = 'Races List';

  constructor(
    private raceService: RaceService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit() {
    console.log('RaceListComponent.ngOnInit', 'begin');
/*
    let season = 0;
    this.route.params.forEach((params: Params) => {
      season = +params['season']; // (+) converts string 'id' to a number
    });
    console.log('season=' + season);
    if (isNaN(season)) {
      this.loadAllRaceData ();
    } else {
      this.loadRaceOfSeasonData(season);
    }
*/
    this.getParameterByForEach();
    this.getParameterBySnapshot();

    let season = this.getParameterBySubscribe();
    if (isNaN(season)) {
      this.loadAllRaceData ();
    } else {
      this.loadRaceOfSeasonData(season);
    }
    console.log('RaceListComponent.ngOnInit', 'end');
  }

  private getParameterByForEach() {
    console.log('RaceListComponent.getParameterByForEach', 'begin');
    let seasonId: number;
    this.route.params.forEach((params: Params) => {
      seasonId = +params['season']; // (+) converts string 'season' to a number
    });
    console.log('RaceListComponent.getParameterByForEach', 'end', 'seasonId=' + seasonId);
  }

  private getParameterBySubscribe(): number {
    console.log('RaceListComponent.getParameterBySubscribe', 'begin');
    let seasonId: number;
    this.route.params.subscribe(params => {
       seasonId = +params['season']; // (+) converts string 'season' to a number
       // In a real app: dispatch action to load the details here.
    });
    console.log('RaceListComponent.getParameterBySubscribe', 'end', 'seasonId=' + seasonId);
    return seasonId;
  }

  private getParameterBySnapshot(): number {
    console.log('RaceListComponent.getParameterBySnapshot', 'begin');
    // (+) converts string 'season' to a number
    let seasonId = +this.route.snapshot.params['season'];
    console.log('RaceListComponent.getParameterBySnapshot', 'end', 'seasonId=' + seasonId);
    return seasonId;
  }

  loadAllRaceData () {
    console.log('RaceListComponent.loadAllRaceData', 'begin');
    this.raceService.getAll()
      .subscribe(data => {
        console.log('RaceListComponent.loadAllRaceData');
        console.log(data);
        this.raceList = data;
      },
      error => { alert(error); },
      () => {
        console.log('RaceListComponent.loadAllRaceData', 'begin');
        console.log('RaceListComponent.loadAllRaceData', 'Complete');
        this.onDone.emit(true);
        console.log('RaceListComponent.loadAllRaceData', 'end');
      }
    );
    console.log('RaceListComponent.loadAllRaceData', 'end');
  }

  loadRaceOfSeasonData (theSeason: number) {
    console.log('RaceListComponent.loadRaceOfSeason', 'begin');
    this.raceService.getRacesOfSeason(theSeason)
      .subscribe(data => {
        console.log('RaceListComponent.loadRaceOfSeason');
        console.log(data);
        this.raceList = data;
      },
      error => { alert(error); },
      () => {
        console.log('RaceListComponent.loadRaceOfSeason', 'begin');
        console.log('RaceListComponent.loadRaceOfSeason', 'Complete');
        this.onDone.emit(true);
        console.log('RaceListComponent.loadRaceOfSeason', 'end');
      }
    );
    console.log('RaceListComponent.loadRaceOfSeason', 'end');
  }

  reset (doReset: boolean) {
    console.log('RaceListComponent.reset', 'begin', doReset);
    this.raceList = [];
    console.log('RaceListComponent.reset', 'end');
  }
}
