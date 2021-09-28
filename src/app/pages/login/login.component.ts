import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
  })
  
  isSubmitted:boolean=false

  constructor(public _global:GlobalService) { 
    _global.navStatus=false
  }

  ngOnInit(): void {
  }
  get email(){return this.loginForm.get('email')}
  get password(){return this.loginForm.get('password')}

}
