import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public form = new FormGroup ({
    login: new FormControl(),
    password: new FormControl()
  });

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onSubmit() {

  }

  navigateToSignUp() {
    this.router.navigate(['/sign-up']);
  }

}
