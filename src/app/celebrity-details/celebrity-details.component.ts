import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-celebrity-details',
  templateUrl: './celebrity-details.component.html',
  styleUrls: ['./celebrity-details.component.scss']
})
export class CelebrityDetailsComponent implements OnInit {
  c$ : Object;

  constructor( private data : DataService , private route : ActivatedRoute) {
    this.route.params.subscribe((params) => this.c$ = params.id);

   }

  ngOnInit() {
    this.data.getCelebrity(this.c$).subscribe((data) => this.c$ = data);
    console.log(this.data.getCelebrity(this.c$))
  }

}
