import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Beer} from './interfaces/beer.interface';

@Injectable({
  providedIn: 'root',
})
export class BackendService {

  constructor(private httpClient: HttpClient) {
  }

  getBeersByPage(pageNumber: number, perPage: number) {
    const options = {
      params: new HttpParams()
        .set('page', pageNumber.toLocaleString())
        .set('per_page', perPage.toLocaleString())
    };
    return this.httpClient.get<Beer[]>('https://api.punkapi.com/v2/beers', options);
  }
}
