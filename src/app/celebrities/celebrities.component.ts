import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.scss']
})
export class CelebritiesComponent implements OnInit {
  celebrity$ : Object;
  constructor(private data: DataService) { }

  ngOnInit() {
    //  this.data.getCelebrities().subscribe((data) => this.celebrity$ = data)

    this.data.getCelebrities().subscribe(function (data) {
      this.celebrity$ = data
      console.log(" celebrities  ", this.celebrity$)
      return this.celebrity$;
    })
  }

}
