import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {

  providers : any;
  articleToUpdate :any ;
   id : any;
   label  : any;
   price : any;
   picture : any;
   provider:any;
  constructor(private articleService: ArticleService, private providerService: ProviderService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.providerService.listProviders().subscribe(
      result =>{
        this.providers=result;
      }
    )
    this.route.paramMap.subscribe(
      params => {
        this.provider = params[0].get('providerId');
        this.id = params[1].get('id');
      } );
      this.articleToUpdate = this.articleService.getArticle(this.id).subscribe(
         response => {
           //console.log(response);
          this.label = response["label"];
          this.price = response["price"];
          this.picture = response["picture"];
          this.provider = response["provider.id"]
          } );
  }
  updateArticle(){
    this.articleToUpdate = {
      'label': this.label,
      'price': this.price,
      'picture': this.picture,
      'provider': this.provider,
      'id': this.id
    }

    this.articleService.updateArticle( this.articleToUpdate).subscribe(
      result=>{
        this.router.navigate(['listArticle']);
      }
    )
  }
}
