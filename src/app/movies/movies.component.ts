import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies$: Object;
  constructor(private data: DataService) { }


  ngOnInit() {

    // this.data.getMovies().subscribe((data) => this.movies$ = data)
    this.data.getMovies().subscribe(function (data) {
      this.movies$ = data
      console.log("movies$ ", this.movies$)
      return this.movies$;
    })
  }

}
