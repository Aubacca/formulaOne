import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { RaceData } from '../models/RaceData';
import 'rxjs/add/operator/map';

@Injectable()
export class RaceService {
  headers: Headers;
  private mainUrl = 'http://ergast.com/api/f1/';

  constructor(private http: Http) {
    this.headers = new Headers({ 'Accept': 'application/json' });
    // this.headers.append('Content-type', 'application/json');
    // this.headers.delete('X-XSRF-TOKEN');
  }

  getAll(): Observable<RaceData[]> {
//    let url = 'http://ergast.com/api/f1/current.json';
    const endPoint = 'current.json';
    let maxResults = 30;
    let dataOffset = 0;
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', (maxResults === undefined ? '' : maxResults.toString()));
    params.set('offset', (dataOffset === undefined ? '' : dataOffset.toString()));
    //
    return this.http
      .get(this.mainUrl + endPoint, {
        headers: this.headers,
        search: params
       })
      .map(response => {
        if (response.status === 200) {
          let raceData: RaceData[] = [];
          let json = response.json();
          let racesList = json.MRData.RaceTable.Races;
          racesList.map(jsondata => {
            raceData.push(new RaceData(jsondata));
          });
          return raceData;
        }
      });
  }

  getRacesOfSeason (season: number): Observable<RaceData[]> {
    let url = 'http://ergast.com/api/f1/' + season + '/races.json';
    //
    return this.http
      .get(url, {
        headers: this.headers
       })
      .map(response => {
        if (response.status === 200) {
          let raceData: RaceData[] = [],
            json = response.json(),
            racesList = json.MRData.RaceTable.Races;
          // Get race data.
          racesList.map(jsondata => { raceData.push(new RaceData(jsondata)); });
          return raceData;
        }
      });
  }
}
