import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scroll(0,0) //Quando iniciar a página, estará nas coodernadas (0,0), ou seja, o topo
  }

}
