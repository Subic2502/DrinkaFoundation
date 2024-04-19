import { Component, HostListener, ElementRef, OnInit,Renderer2,ViewChild } from '@angular/core';
import { trigger, transition, style, animate,state } from '@angular/animations';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit {
  
  
  
  private scrollTimeout: any;

  constructor(private el: ElementRef, private scrollService: ScrollService) {}

  ngOnInit() {
    // Initialize any setup code if needed
  }

  @HostListener('wheel', ['$event'])
  onWheel(event: WheelEvent) {
    if (!this.scrollService.getEnableScrolling()) {
      return;
    }

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
