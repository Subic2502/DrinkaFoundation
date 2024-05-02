import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent implements OnInit{
  @Input() news: any;
  @Output() cardClick = new EventEmitter<any>();

  @Input() title:string |undefined;
  @Input() text:string | undefined;
  @Input() author:string|undefined;
  @Input() publishDate :Date | undefined;
  

  ngOnInit(): void {
    
  }

  onCardClick(): void {
    this.cardClick.emit(this.news);
  }

}
