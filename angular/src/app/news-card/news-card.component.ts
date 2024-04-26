import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.css'
})
export class NewsCardComponent implements OnInit{
  @Input() news: any;
  @Output() cardClick = new EventEmitter<any>();

  title="Neki naslov";
  text="Ide neki tekst ispod asjdkajsdksjad askdjaksjd asdjaskdj kajsdkajskd asjdkasjdkasj asdjaksjdkasjd  askdjaskdjka askdjaksdjka askdjaskdj";
  author="Uros Subic";
  publishDate = "25.2.2001";
  

  ngOnInit(): void {
    
  }

  onCardClick(): void {
    this.cardClick.emit(this.news);
  }

}
