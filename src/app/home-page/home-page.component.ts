import { Component, HostListener, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import 'intersection-observer';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  animations: [
    trigger('fadeInAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('10s ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HomePageComponent {
  public fadeInState = 'out';

  // Callback function when the element is intersecting
  public onIntersection(entries: IntersectionObserverEntry[]): void {
    let isAnySectionIntersecting = false;
  
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        // Log a message when the section is intersecting
        //console.log('Section is intersecting!');
        isAnySectionIntersecting = true;
      }
    });
  
    this.fadeInState = isAnySectionIntersecting ? 'in' : 'out';
  }
  

  // Intersection Observer setup
  public observer: IntersectionObserver | null = null;

  //-----------------------------------------Scrolling-----------------------------------*/

  private scrollTimeout: any;

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

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    event.preventDefault();

    // Clear any existing scroll timeout
    clearTimeout(this.scrollTimeout);

    // Use a timeout to debounce the scroll events
    this.scrollTimeout = setTimeout(() => {
      this.handleScroll(event);
    }, 200);
  }

  private handleScroll(event: WheelEvent) {
    const container = this.el.nativeElement;
    const sections = container.querySelectorAll('div[id$="-section"]');
    const currentSection = this.getCurrentSection(container.scrollTop, sections);

    if (event.deltaY > 0) {
      // Scrolling down
      const nextSection = this.getNextSection(currentSection, sections);
      this.scrollToSection(nextSection);
    } else if (event.deltaY < 0) {
      // Scrolling up
      const prevSection = this.getPrevSection(currentSection, sections);
      this.scrollToSection(prevSection);
    }
  }

  private getCurrentSection(scrollTop: number, sections: NodeListOf<HTMLDivElement>): HTMLDivElement | null {
    let currentSection: HTMLDivElement | null = null;
  
    sections.forEach((section: HTMLDivElement) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom > 0) { // Adjust 56 based on the height of your navbar
        currentSection = section;
      }
    });
  
    return currentSection;
  }
  

  private getNextSection(currentSection: HTMLDivElement | null, sections: NodeListOf<HTMLDivElement>): HTMLDivElement | null {
    if (!currentSection) {
      return null;
    }
  
    const currentIndex = Array.from(sections).indexOf(currentSection);
    return sections[currentIndex + 1] || sections[0];
  }
  
  private getPrevSection(currentSection: HTMLDivElement | null, sections: NodeListOf<HTMLDivElement>): HTMLDivElement | null {
    if (!currentSection) {
      return null;
    }
  
    const currentIndex = Array.from(sections).indexOf(currentSection);
    return sections[currentIndex - 1] || sections[sections.length - 1];
  }
  

  private scrollToSection(section: HTMLDivElement | null) {
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}