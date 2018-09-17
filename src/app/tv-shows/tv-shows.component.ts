import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.scss']
})
export class TvShowsComponent implements OnInit {
  tv$: Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    //  this.data.getTvShows().subscribe((data) => this.tv$ = data)

    this.data.getTvShows().subscribe(function (data) {
      this.tv$ = data
      console.log("tv shows$ ", this.tv$)
      return this.tv$;
    })
  }

}
