import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm = new FormGroup({
    email:new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    password:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
    confPassword:new FormControl('',[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(20)
    ]),
  })
  
  isSubmitted:boolean=false

  constructor() { }

  ngOnInit(): void {
  }
  get email(){return this.regForm.get('email')}
  get password(){return this.regForm.get('password')}
  get confPassword(){return this.regForm.get('confPassword')}
}
