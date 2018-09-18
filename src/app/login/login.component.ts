import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  getU: Object = {};
  //submitted: Boolean = true;
  perUser$: Object = {};
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  onLogin() {
    console.log("Inside login()");
    this.data.getUser(this.getU).subscribe(data => this.perUser$ = data);
    //this.submitted = false;
  }

}
