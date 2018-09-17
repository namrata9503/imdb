import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  m$ : Object;
  constructor( private data : DataService , private route : ActivatedRoute) {
    this.route.params.subscribe((params) => this.m$ = params.id);

   }

  ngOnInit() {
    this.data.getMovie(this.m$).subscribe((data) => this.m$ = data);

  }

}
