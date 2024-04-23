import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-writer',
  templateUrl: './news-writer.component.html',
  styleUrl: './news-writer.component.css'
})
export class NewsWriterComponent implements OnInit{
  selectedFiles: File[] = [];

  ngOnInit(): void {
    
  }

  onFilesSelected(event: any): void {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.selectedFiles.push(files[i]);
    }
  }

  resetFiles(): void {
    this.selectedFiles = [];
  }

}
