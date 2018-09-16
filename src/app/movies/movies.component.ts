import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie$ : Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getMovies().subscribe((data) => this.movie$ = data)

  }

}
