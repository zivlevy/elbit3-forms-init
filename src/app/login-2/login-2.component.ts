import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-2',
  templateUrl: './login-2.component.html',
  styleUrls: ['./login-2.component.css']
})
export class Login2Component implements OnInit {
  user = {
    name: '',
    email: '',
    password: ''
  };
  loginForm: FormGroup;

  constructor(public fb: FormBuilder) {
  }
  get password() {
    return this.loginForm.get('password');
  }

  get name() {
    return this.loginForm.get('name');
  }

  get email() {
    return this.loginForm.get('email');
  }

  ngOnInit() {

    this.loginForm = this.fb.group({
      'name': ['', [
        Validators.required]
      ],
      'email': ['', [
        Validators.required,
        Validators.email]
      ],
      'password': ['', [
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(4),
        Validators.maxLength(25),
        Validators.required]
      ]
    });
  }

}
