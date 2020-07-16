import { Component, OnInit } from '@angular/core';
import { RestService } from "../providers/rest-service";

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.page.html',
  styleUrls: ['./blog-post.page.scss'],
})
export class BlogPostPage implements OnInit {

  public blogPost: any;
  
  constructor(
    public restService: RestService
  ) { }

  ngOnInit() {
    this.restService.getData("/blog-postings?sort=dateCreated%3Adesc").then((result) => {
      this.blogPost = result.items;
    }, (err) => {
      //Connection failed message
      console.log("Fail!");
    });
  }

  doRefresh(event) {
    this.restService.getData("/blog-postings?sort=dateCreated%3Adesc").then((result) => {
      this.blogPost = result.items;
      event.target.complete();
    }, (err) => {
      //Connection failed message
      event.target.complete();
      console.log("Fail!");
    });
  }

}
