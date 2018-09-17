import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.scss']
})
export class TvshowDetailsComponent implements OnInit {
  t$ : Object;
  constructor(private data : DataService , private route : ActivatedRoute) {
    this.route.params.subscribe((params) => this.t$ = params.id);
    
   }

  ngOnInit() {
    this.data.getTvShow(this.t$).subscribe((data) => this.t$ = data);

  }

}
