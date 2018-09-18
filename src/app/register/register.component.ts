import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  add: Object = {};
  submitted: Boolean = false;
  addId: Object = {};
  constructor( private data: DataService ) { }

  ngOnInit() {
  }
  onSubmit() {
    this.submitted = true;
    console.log("this.submitted", this.submitted);
  }
  goBack() {
    this.submitted = false;
    console.log("this.submitted", this.submitted);
  }
  createPost() {
    console.log("Inside createPost()", this.add);
    this.data.postCreateUser(this.add).subscribe(data => this.addId = data);
  }
  removePost() {
    console.log("Inside removePost()", this.add);
    this.data.delRemoveUser({
      id: 1
    }).subscribe(data => console.log("Deleted data", data));
  }

}
