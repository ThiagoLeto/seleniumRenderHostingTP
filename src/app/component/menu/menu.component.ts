import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public data:any;

  constructor(
    private router: Router
  ) {}


  ngOnInit(): void {}
  OnSbmt(){
      alert("Tus datos se han enviado")
  }
}
