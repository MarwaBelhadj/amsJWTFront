import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-provider',
  templateUrl: './list-provider.component.html',
  styleUrls: ['./list-provider.component.css']
})
export class ListProviderComponent implements OnInit {
  providers : any;
  constructor(private providerService :ProviderService, private router : Router) { }

  ngOnInit(): void {
    /*
    this.providerService.listProviders().subscribe(
      data=>{
        this.providers=data;
      }
    )*/
    this.refreshListProviders();
  }
  deleteProvider(myObj : any){
    this.providerService.deleteProvider(myObj).subscribe(
      result=> {
        console.log(result);
        this.refreshListProviders();
      }
    );
  }
  refreshListProviders() {
    this.providerService.listProviders().subscribe(
      response => {
        this.providers = response;
      } );
    }

    updateProvider(myObj :any ) {
      // updateProvider est un component
      this.router.navigate(['updateProvider' + '/' + myObj['id']]);
      this.refreshListProviders();
     }

}



