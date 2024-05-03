import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

interface FormData {
  Date: string;
  Author: string;
  Title: string;
  ShortText: string;
  LongText: string;
  Photos:File[]
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
    Photos:[]
  };

  constructor(private http : HttpClient){}

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
    const response = this.http.post<any>('http://localhost:5024/api/News/add-news', this.formData);

    console.log(response);

    // You can now process the form data as needed
    // (e.g., send to server, store locally)

    // Optional: Clear form after submission (if desired)
    this.formData = {
      Date: '',
      Author: '',
      Title: '',
      ShortText: '',
      LongText: '',
      Photos:[]
    };
  }

}
