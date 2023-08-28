import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private router: Router
  ) {
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {}

  menu(){
    const emailValue = this.formLogin.get('email')?.value;
    const passwordValue = this.formLogin.get('password')?.value;

    if (emailValue && passwordValue) {
      this.router.navigate(['/menu']);
    }
    else{
      alert("Ingrese sus datos")
    }
  }
}