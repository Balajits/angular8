import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = true;
  loading = false;
  invalidlogin = false;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      username: [ 'Admin', Validators.required],
      password: [ 'Root', Validators.required]
      });
  }
  onsubmit() {
    // this.submitted = true;
    if (this.loginform.invalid) {
      return;
    }
  }
}

