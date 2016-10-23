import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DriverData } from '../models/DriverData';
import 'rxjs/add/operator/map';

@Injectable()
export class DriverService {
  headers: Headers;
  private mainUrl = 'http://ergast.com/api/f1/';


  constructor(private http: Http) {
    this.headers = new Headers(
      { 'Accept': 'application/json' });
    // this.headers.append('Content-type', 'application/json');
    // this.headers.delete('X-XSRF-TOKEN');
  }

  getAll(): Observable<DriverData[]> {
//    let url = 'http://ergast.com/api/f1/drivers.json';
    const endPoint = 'drivers.json';
    let maxResults = 21;
    let dataOffset = 617;
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', (maxResults === undefined ? '' : maxResults.toString()));
    params.set('offset', (dataOffset === undefined ? '' : dataOffset.toString()));
    //
    return this.http
//      .get(url, {
      .get(this.mainUrl + endPoint, {
        headers: this.headers,
        search: params
       })
      .map(response => {
        if (response.status === 200) {
          let driverData: DriverData[] = [];
          let json = response.json();
          let driverList = json.MRData.DriverTable.Drivers;
          driverList.map(jsondata => {
            driverData.push(new DriverData(jsondata));
          });
          return driverData;
        }
      });
  }

  getDriversOfSeason(season: number): Observable<DriverData[]> {
    let url = 'http://ergast.com/api/f1/' + season + '/drivers.json';
    //
    return this.http
      .get(url, {headers: this.headers})
      .map(response => {
        if (response.status === 200) {
          let driverData: DriverData[] = [];
          let json = response.json();
          let driverList = json.MRData.DriverTable.Drivers;
          driverList.map(jsondata => {
            driverData.push(new DriverData(jsondata));
          });
          return driverData;
        }
      });
  }
}
