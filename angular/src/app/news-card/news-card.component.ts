import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Photo } from '../Data/Photo';
import { DomSanitizer } from '@angular/platform-browser';

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
  @Input() listOfPhotos :Photo[] =[];
  

  ngOnInit(): void {
    
  }

  constructor(private sanitizer:DomSanitizer){}

  onCardClick(): void {
    this.cardClick.emit(this.news);
  }

  getPhotoUrl(photoString: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/jpeg;base64,${photoString}`); // Adjust content type as needed
  }

}
