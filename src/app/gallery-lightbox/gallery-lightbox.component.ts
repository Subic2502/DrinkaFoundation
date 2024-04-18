import { Component,Input,OnInit } from '@angular/core';

interface Item{
  imageSrc:String;
  imageAlt:String;
}

@Component({
  selector: 'app-gallery-lightbox',
  templateUrl: './gallery-lightbox.component.html',
  styleUrl: './gallery-lightbox.component.css'
})
export class GalleryLightboxComponent {
  @Input() galleryData : Item[] = [];
}
