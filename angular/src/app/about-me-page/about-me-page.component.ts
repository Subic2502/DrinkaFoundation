import { Component, HostListener, ElementRef, OnInit } from '@angular/core';
import { ScrollService } from '../scroll.service';

interface Item{
  imageSrc:String;
  imageAlt:String;
}

@Component({
  selector: 'app-about-me-page',
  templateUrl: './about-me-page.component.html',
  styleUrl: './about-me-page.component.css'
})
export class AboutMePageComponent implements OnInit {

  data : Item[] = [
    {
      imageSrc: '',
      imageAlt: ''
    }
  ];

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    // Disable special scrolling behavior for this component
    this.scrollService.setEnableScrolling(false);
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    window.scroll();
  }
}

