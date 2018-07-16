import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData = { GPN:'', password:'' };
  message = '';
  data: any;
  constructor(private http: HttpClient) { }
  login() {


    localStorage.setItem('jwtToken', this.data.token);
    //this.router.navigate(['table']);
      //this.message = err.error.msg;
}


  ngOnInit() {
  }

}
