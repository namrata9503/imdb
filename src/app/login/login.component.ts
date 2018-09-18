import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  //submitted: Boolean = true;
  perUser$: Object = {};
  constructor(private data: DataService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => this.perUser$ = params.id);

  }
  onLogin() {
    console.log("Inside login()",this.perUser$ );
    this.data.getUser(this.perUser$).subscribe(data => this.perUser$ = data);
    //this.submitted = false;
  }

}
