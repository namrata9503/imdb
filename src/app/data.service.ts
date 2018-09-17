import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getMovies() {
    return this.http.get('http://localhost:5555/api/v1/movies')
  }

  getMovie(id){
    return this.http.get(`http://localhost:5555/api/v1/movies/${id}`)
  }
  getTvShows() {
    return this.http.get('http://localhost:5555/api/v1/tvshows')
  }
  getTvShow(id){
    return this.http.get(`http://localhost:5555/api/v1/tvshows/${id}`)
  }
  getCelebrities() {
    return this.http.get('http://localhost:5555/api/v1/celebrities')
  }
  getCelebrity(id){
    return this.http.get(`http://localhost:5555/api/v1/celebrities/${id}`)
  }
}

