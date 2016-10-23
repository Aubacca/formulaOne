import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DriverService } from '../../service/driver.service';
import { DriverData } from '../../models/DriverData';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css'],
  providers: [DriverService]
})
export class DriverListComponent implements OnInit {
  driverList: DriverData[] = [];
  @Output() onDone: EventEmitter<boolean> = new EventEmitter<boolean>();
  title: string = 'Drivers List';
  seasonId: number = null;

  constructor(
    private driverService: DriverService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    console.log('DriverListComponent.ngOnInit', 'begin');
    this.seasonId = this.getParameterBySnapshot();
    console.log('seasonId=', this.seasonId, this.isSeasonSelected ());
//    if (this.seasonId === null) {
    if (this.isSeasonSelected ()) {
      this.loadDriversBySeason(this.seasonId);
    } else {
      this.loadAllDrivers (30);
    }
    console.log('DriverListComponent.ngOnInit', 'end');
  }

  loadAllDrivers (theLimit: number) {
    console.log('DriverListComponent.loadAllDrivers', 'begin', theLimit);
    this.driverService.getAll()
      .subscribe(data => {
        console.log('DriverListComponent.loadAllDrivers');
        console.log(data);
        this.driverList = data;
      },
      error => { alert(error); },
      () => {
        console.log('DriverListComponent.loadAllDrivers', 'begin');
        console.log('DriverListComponent.loadAllDrivers', 'Complete');
        this.onDone.emit(true);
        console.log('DriverListComponent.loadAllDrivers', 'end');
      }
    );
    console.log('DriverListComponent.loadAllDrivers', 'end');
  }

  private loadDriversBySeason(seasonId: number) {
    console.log('DriverListComponent.loadDriversBySeason', 'begin', seasonId);
    this.driverService.getDriversOfSeason(seasonId)
      .subscribe(data => { this.driverList = data; },
      error => { alert(error); },
      () => { this.onDone.emit(true); }
    );
    console.log('DriverListComponent.loadDriversBySeason', 'end');
  }

  private getParameterBySnapshot(): number {
    console.log('RaceListComponent.getParameterBySnapshot', 'begin');
    // (+) converts string 'season' to a number
    let seasonId = +this.route.snapshot.params['season'];
    console.log('RaceListComponent.getParameterBySnapshot', 'end', 'seasonId=' + seasonId, this.isSeasonSelected ());
    return seasonId;
  }

  /** Is a season selected or not. */
  isSeasonSelected (): boolean {
    console.log('isSeasonSelected (): this.seasonId=', this.seasonId, this.seasonId !== null && !isNaN(this.seasonId));
    return !isNaN(this.seasonId);
  }

  reset (doReset: boolean) {
    console.log('DriverListComponent.reset', 'begin', doReset);
    this.driverList = [];
    console.log('DriverListComponent.reset', 'end');
  }
}
