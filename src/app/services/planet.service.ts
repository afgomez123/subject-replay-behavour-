import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PlanetService {
  constructor(private _http: HttpClient) {}

  //TODO: Should be implemented with reply and behaviour subjects
  getValues() {
    const url = 'https://planets-by-api-ninjas.p.rapidapi.com/v1/planets';
    return this._http
      .get(url, {
        params: { name: 'Mars' },
        headers: {
          'X-RapidAPI-Key':
            '7264dbb400msh036a7bb1affd8ddp1e3bc5jsn223afb140201',
          'X-RapidAPI-Host': 'planets-by-api-ninjas.p.rapidapi.com',
        },
      })
      .subscribe((planet) => console.log(planet));
  }
}
