import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
  //provider : any;
  //
  constructor(private service : ProviderService, private router : Router) { }

  ngOnInit(): void {
  }
  createProvider(myform:any){
    this.service.createProvider(myform).subscribe(
      data=>{
        this.router.navigate(['listProvider']);
        //console.log(data);
      }
    );


  }

}
