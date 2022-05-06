import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  urlProviders= environment.urlProviders;
  provider : any;  

username = sessionStorage.getItem('username');
 password = sessionStorage.getItem('password');

  constructor(private Http : HttpClient) { }

  listProviders(){
    //headers c'est la chaine de connexion du mot basic avec le login et mdp cripté par 'btoa'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    //On passe la chaine de connexion dans l'url
    return this.Http.get(this.urlProviders + '/list', {headers} );
  }

  createProvider(myform:any){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    this.provider = {
      'name' : myform.value.providerName,
      'email' : myform.value.providerEmail,
      'address' : myform.value.providerAdress
    }
    return this.Http.post(this.urlProviders+'/add',this.provider, {headers})  ;
  }

  updateProvider(myObj:any){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.put(this.urlProviders + '/'+myObj['id'] , myObj , {headers} );
  }
  deleteProvider(myObj:any){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.delete(this.urlProviders + '/'+myObj['id'], {headers} );
  }
  getProvider(id : number){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.username + ':' + this.password) });
    return this.Http.get(this.urlProviders + '/'+ id , {headers});
  }
}

