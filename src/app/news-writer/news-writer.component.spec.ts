import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsWriterComponent } from './news-writer.component';

describe('NewsWriterComponent', () => {
  let component: NewsWriterComponent;
  let fixture: ComponentFixture<NewsWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsWriterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
