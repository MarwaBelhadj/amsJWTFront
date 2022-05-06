import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  invalidLogin = false;

  successMessage = "Authentication success";
  errorMessage = "Invalide username or password";
 

  constructor(private router: Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }
  
  checkLogin() {
    /*
    if (this.loginservice.authenticate(this.username, this.password)) {
      this.router.navigate([''])
    } else
      this.invalidLogin = true
      */

      (this.loginservice.authenticate(this.username, this.password).subscribe(
        data => {
          console.log(data);
        this.router.navigate(['']);
        this.invalidLogin = false;
        console.log('kjherrrrre');

        },
        error=>{
          this.invalidLogin = true;
        }
      )
      );
      
  }

}
