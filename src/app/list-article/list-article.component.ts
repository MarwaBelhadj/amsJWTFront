import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ProviderService } from '../services/provider.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  articles: any;
  constructor(private articleService : ArticleService, private providerService: ProviderService, private router : Router) { }

  ngOnInit(): void {
    this.refreshListArticle();
  }

  refreshListArticle(){
    return this.articleService.listArticles().subscribe(
      response =>{
        this.articles=response;
      }
    )
  }
  deleteArticle(myobj){
    this.articleService.deleteArticle(myobj).subscribe(
      result=>{
        this.refreshListArticle();
      }
    )
  }
  updateArticle(myobj){
      this.router.navigate(['updateArticle' + '/',myobj['provider.id']+'/'+ myobj['id']]);
        this.refreshListArticle();
      }
}
