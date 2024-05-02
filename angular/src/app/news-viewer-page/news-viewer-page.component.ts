import { Component, OnInit } from '@angular/core';
import { News } from '../Data/News';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-news-viewer-page',
  templateUrl: './news-viewer-page.component.html',
  styleUrl: './news-viewer-page.component.css'
})
export class NewsViewerPageComponent implements OnInit {

  news: News | undefined;

  constructor(private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("uslo u oninit");
    const id = this.route.snapshot.queryParams['id'];
    if (id) {
      console.log("ID:"+id);
      this.http.get<News>(`http://localhost:5024/api/News/${id}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching news', error);
          return throwError(() => new Error('Error fetching news'));
        })
      )
      .subscribe(data => {
        this.news = data;
        console.log('News data loaded', this.news);
      });
    }else{
      console.log("Nema ida");
    }
  }

}
