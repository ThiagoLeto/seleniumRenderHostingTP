import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
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
    private authService: AuthService,
    private router: Router
  ) {}


  ngOnInit(): void {}
  onClick() { 
    this.authService.logout()
      .then(() => {
        this.router.navigate(['/register']);
      })
      .catch(error => console.log(error));
  }
  onSubmit(){
      alert("Tus datos se han enviado")
  }
}
