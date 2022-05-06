import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor( private httpClient: HttpClient) { }

  authenticate(username, password) {
    //const headers = new HttpHeaders().set('Authorization', 'Basic ' + btoa('username' + ':' + 'password'));
    
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    //headers.set('Access-Control-Allow-Origin', '*');
    return this.httpClient.get(environment.urlAuth, { headers }).pipe
      (
        map(
          userData => {
            console.log("Avant :" + userData);
            sessionStorage.setItem('username', username);
            sessionStorage.setItem('password', password);
            console.log(username + " " + password);
            
            return userData;
          }
        )
      );

    // Hard Coded authentication one only user amine 
    /*
    if (username === "amine" && password === "1234") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }*/
  }

    isUserLoggedIn() {
      let user = sessionStorage.getItem('username')
      console.log(!(user === null))
      return !(user === null)
    }

    logOut() {
      sessionStorage.removeItem('username')
    }
  }
