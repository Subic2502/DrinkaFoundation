import { Component, OnInit } from '@angular/core';
import { News } from '../Data/News';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, catchError, map, throwError } from 'rxjs';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.css'
})
export class NewsPageComponent implements OnInit {

  newsList: News[] = [];


  ngOnInit(): void {
    this.fetchNewsData();
  }

  constructor(private http:HttpClient){}

  fetchNewsData(): void {
    this.http.get<News[]>('http://localhost:5024/api/News/')
      .pipe(
        catchError(error => {
          console.error('Error fetching news', error);
          return throwError(() => new Error('Error fetching news'));
        })
      )
      .subscribe(data => {
        this.newsList = data;
        console.log('News data loaded', this.newsList);
      });
  }

}
