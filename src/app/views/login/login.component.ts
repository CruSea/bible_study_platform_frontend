import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isauthenticated: boolean;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    
  }

  onSignin(form: NgForm){
    console.log(form);
    this.authService.authenticate(form.value.phone, form.value.password);
    this.authService.autheticate_emiter.subscribe( res => {
    
      console.log(form)

    } );

  this.router.navigate(['/dashboard']);
    
  }
}
