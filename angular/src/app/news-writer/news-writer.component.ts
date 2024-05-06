import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, throwError } from 'rxjs';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';

interface FormData {
  Date: string;
  Author: string;
  Title: string;
  ShortText: string;
  LongText: string;
  Photos: string[]
}

@Component({
  selector: 'app-news-writer',
  templateUrl: './news-writer.component.html',
  styleUrl: './news-writer.component.css',
  providers: [MessageService]
})
export class NewsWriterComponent implements OnInit {

  selectedFiles: File[] = [];
  formData: FormData = {
    Date: '',
    Author: '',
    Title: '',
    ShortText: '',
    LongText: '',
    Photos: []
  };

  statusObjave:string="Neobjavljeno";

  constructor(private http: HttpClient,private messageService:MessageService) { }

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

  async onSubmit() {
    //slike u base64
    const base64Images: string[] = [];
    console.log("Prvi log base64: " + base64Images)
    for (const file of this.selectedFiles) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      await new Promise((resolve) => reader.onloadend = () => resolve(reader.result));
      const base64String = reader.result?.toString()?.split(',')[1]; // Extract base64 data
      console.log("Slika convertovana: "+base64String)
      if (base64String) { // Check if base64 data is valid before pushing
        base64Images.push(base64String);
        console.log("Azuriran niz slika: "+base64Images)
      }
    }

    // Update formData with base64 images
    this.formData.Photos = base64Images;


    // Access form data in formData object
    console.log(this.formData);

    this.http.post<boolean>('http://localhost:5024/api/News/add-news', this.formData)
      .pipe(
        catchError(error => {
          console.error('Error', error);
          this.statusObjave = "Doslo je do greske!";
          return throwError(() => new Error('Error'));
        })
      )
      .subscribe(Boolean => {
        console.log('Added news to database');
        this.statusObjave = "Objavljeno!";
        this.messageService.add({severity:'success', summary: 'Objavljeno!', detail: 'Vest je uspešno stavljana u bazu podataka i biće izlistana na sajtu!'});
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
