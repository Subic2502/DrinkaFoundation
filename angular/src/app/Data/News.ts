import { Photo } from "./Photo";

// news.model.ts
export interface News {
    id: number;
    shortText: string;
    longText: string;
    author: string;
    date: Date; // Assuming Date from JavaScript's Date object
    listOfPhotos: Photo[]; // Assuming Photo interface is defined (see below)
    title:string;
  }
  