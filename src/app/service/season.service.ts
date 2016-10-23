import { Injectable } from '@angular/core';
import { Headers, Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SeasonData } from '../models/SeasonData';
import 'rxjs/add/operator/map';

@Injectable()
export class SeasonService {
  headers: Headers;
  private mainUrl = 'http://ergast.com/api/f1/';

  constructor(private http: Http) {
    this.headers = new Headers({ 'Accept': 'application/json' });
  }

  getAll(): Observable<SeasonData[]> {
    const endPoint = 'seasons.json';
    let maxResults = 11;
    let dataOffset = 10;
    let params: URLSearchParams = new URLSearchParams();
    params.set('limit', (maxResults === undefined ? '' : maxResults.toString()));
    params.set('offset', (dataOffset === undefined ? '' : dataOffset.toString()));
    //
    return this.http
      .get(this.mainUrl + endPoint, {
        headers: this.headers,
        search: params
       })
//      .get('./app/service/dataSeason.json')
      .map(response => {
        if (response.status === 200) {
          let seasonData: SeasonData[] = [];
          let json = response.json();
          let seasonsList = json.MRData.SeasonTable.Seasons;
          seasonsList.map(jsondata => {
            seasonData.push(new SeasonData(jsondata));
          });
          return seasonData;
        }
      });
  }
}
