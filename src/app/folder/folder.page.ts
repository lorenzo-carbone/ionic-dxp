import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from "../providers/rest-service";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  public blogPost: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    public restService: RestService) {
    }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.restService.getData("").then((result) => {
      this.blogPost = result.items;
    }, (err) => {
      //Connection failed message
      console.log("Fail!");
    });
  }

  doRefresh(event) {
    this.restService.getData("").then((result) => {
      this.blogPost = result.items;
      event.target.complete();
    }, (err) => {
      //Connection failed message
      event.target.complete();
      console.log("Fail!");
    });
  }

}
