import { Component, HostListener, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'intersection-observer';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  animations: [
    trigger('fadeInAnimation', [
      state('void', style({ opacity: 0 })),
      transition(':enter, :leave', [
        animate('1.5s ease-in-out')
      ]),
    ]),
  ],
})
export class HomeComponent {

  public fadeInState = 'out';

  // Callback function when the element is intersecting
  public onIntersection(entries: IntersectionObserverEntry[]): void {
    let isAnySectionIntersecting = false;
  
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // Log a message when the section is intersecting
        console.log('Section is intersecting!From inner component!');
        isAnySectionIntersecting = true;
      }
    });
  
    this.fadeInState = isAnySectionIntersecting ? 'in' : 'out';
  }

  // Intersection Observer setup
  public observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const targetElement = document.querySelector('#home-section');

      if (targetElement) {
        this.observer = new IntersectionObserver(
          this.onIntersection.bind(this),
          { threshold: 0.5 } // Adjust threshold as needed
        );

        this.observer.observe(targetElement);
      }
    }
  }

  handleClick(): void {
    console.log('Div clicked! Your message here.');
  }

}
