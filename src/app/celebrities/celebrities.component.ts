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
    return this.data.getCelebrities().subscribe((data) => this.celebrity$ = data)

  }

}
