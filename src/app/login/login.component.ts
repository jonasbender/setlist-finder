import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public response : any;

  constructor(
    private router : Router,
    private authService : AuthenticationService,
  ) { }

  ngOnInit(): void {
  }

  Submit() {
  this.authService.getSpotifyUserLogin().subscribe(
    data => {
      this.response = data;
      console.log(this.response);
      window.location.href=this.response
    }
  )
  }


}
