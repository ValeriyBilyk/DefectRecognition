import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form = new FormGroup ({
    username: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    password: new FormControl(),
    confirmPassword: new FormControl()
  });

  constructor() { }

  ngOnInit() {
  }

}