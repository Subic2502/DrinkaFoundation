import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';

interface FormData {
  Date: string;
  Author: string;
  Title: string;
  ShortText: string;
  LongText: string;
  Photos: File[]
}

@Component({
  selector: 'app-news-writer',
  templateUrl: './news-writer.component.html',
  styleUrl: './news-writer.component.css'
})
export class NewsWriterComponent implements OnInit {

  selectedFiles: File[] = [];
  formData: FormData = {
    Date: '',
    Author: '',
    Title: '',
    ShortText: '',
    LongText: '',
    Photos: this.selectedFiles
  };

  constructor(private http: HttpClient) { }

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

  onSubmit() {
    // Access form data in formData object
    console.log(this.formData);

    this.http.post<boolean>('http://localhost:5024/api/News/add-news', this.formData)
    .pipe(
      catchError(error => {
        console.error('Error', error);
        return throwError(() => new Error('Error'));
      })
    )
    .subscribe(Boolean => {
      console.log('Added news to database');
    });

    // Optional: Clear form after submission (if desired)
    // this.formData = {
    //   Date: '',
    //   Author: '',
    //   Title: '',
    //   ShortText: '',
    //   LongText: '',
    //   Photos:[]
    // };
  }

}
