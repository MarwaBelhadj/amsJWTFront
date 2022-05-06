import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {
   providerToUpdate :any ;
   id : any;
   name  : any;
   email : any;
   address : any;
  constructor(private providerService: ProviderService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.id = params.get('id');
      } );
      this.providerToUpdate = this.providerService.getProvider(this.id).subscribe(
         response => {
           console.log(response);
          this.name = response["name"];
          this.email = response["email"];
           this.address = response["address"];
          } );
        // this.initFormUpdateProvider(myform);
         }
         updateProvider() {
            this.providerToUpdate = {
              'name': this.name,
              'email': this.email,
              'address': this.address,
              'id': this.id
            }
            this.providerService.updateProvider(this.providerToUpdate).subscribe(
              response => {
                console.log(response);
              } );
      this.router.navigate(['listProvider']);
  }
}


