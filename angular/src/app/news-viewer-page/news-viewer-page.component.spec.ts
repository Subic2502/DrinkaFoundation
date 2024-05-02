import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewerPageComponent } from './news-viewer-page.component';

describe('NewsViewerPageComponent', () => {
  let component: NewsViewerPageComponent;
  let fixture: ComponentFixture<NewsViewerPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsViewerPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsViewerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
