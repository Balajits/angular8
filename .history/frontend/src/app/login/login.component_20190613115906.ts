import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }
  username: string;
  password: string;
  ngOnInit() {

  }
  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
     this.router.navigate(['user']);
    } else {
      alert('Invalid Stuff');
    }
  }
}

