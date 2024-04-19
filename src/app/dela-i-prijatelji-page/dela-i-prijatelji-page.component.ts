import { Component } from '@angular/core';

@Component({
  selector: 'app-dela-i-prijatelji-page',
  templateUrl: './dela-i-prijatelji-page.component.html',
  styleUrl: './dela-i-prijatelji-page.component.css'
})
export class DelaIPrijateljiPageComponent {
  images = [{
    imageSrc:'assets/carousel/spomenici/01%20Spomenici/012.jpg',
    imageAlt:'Prva slika'
  },{
    imageSrc:'assets/carousel/spomenici/01%20Spomenici/020.jpg',
    imageAlt:'druga slika'
  },{
    imageSrc:'assets/carousel/spomenici/01%20Spomenici/025.jpg',
    imageAlt:'treca slika'
  },{
    imageSrc:'assets/carousel/spomenici/01%20Spomenici/029.jpg',
    imageAlt:'cetvrta slika'
  },{
    imageSrc:'assets/carousel/spomenici/01%20Spomenici/032.jpg',
    imageAlt:'Peta slika'
  }
  ]
}
