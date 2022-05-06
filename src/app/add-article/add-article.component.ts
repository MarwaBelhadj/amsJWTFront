import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  
providers : any;
  constructor( private serviceArticle : ArticleService, private serviceProvider : ProviderService ,private router : Router) { }

  ngOnInit(): void {
    this.serviceProvider.listProviders().subscribe(
      result =>{
        this.providers=result;
      }
    )
  }

  createArticle(artform){
    this.serviceArticle.createArticle(artform).subscribe(
      response =>{
        this.router.navigate(['listArticle']);
        console.log(response);
      }
    )

  }

}
