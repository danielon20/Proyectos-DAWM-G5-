import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
//import { NewsRss } from "../../news-rss";
//import * as xml2js from "xml2js";

//declare const require;
//const xml2js = require("xml2js");

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  /*
  RssData: NewsRss;
  aversh: Observable<Array<any>>;
  constructor(private http: HttpClient) {
    this.GetRssFeedData();
  }

  
  ngOnInit() {
    this.aversh = this.GetRssFeedData();
  }
  

  GetRssFeedData() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    this.http
      .get<any>("https://gadgets.ndtv.com/rss/feeds", requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });
  }
  */
  constructor() { }

  ngOnInit(): void {
  }
}

//export interface IRssData {}
