import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('/api/v1/movies/')
  }
  getTvShows() {
    return this.http.get('/api/v1/tvshows/')
  }
  getCelebrities() {
    return this.http.get('/api/v1/celebrities/')
  }
}
