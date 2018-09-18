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

   //APIs for form 
   postCreateUser(data) {
    console.log("inside postRegistration()", data);

    return this.http.post('http://localhost:5555/api/v1/users', data);
  }
  //login
  getUser(id){
    console.log("inside getUser()", id);

    return this.http.get(`http://localhost:5555/api/v1/users/${id}`)
  }
  // putUpdateUser(data) {
  //   return this.http.put(`http://localhost:5555/api/v1/users/${data.id}`, JSON.stringify(data));
  // }
  // delRemoveUser(data) {
  //   return this.http.delete(`http://localhost:5555/api/v1/users/${data.id}`);
  // }
}

