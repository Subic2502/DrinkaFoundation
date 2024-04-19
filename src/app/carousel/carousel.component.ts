import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc:string;
  imageAlt:string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {

  @Input() images : carouselImage[] = []
  @Input() indicators = true;
  @Input() controls = true;

  selectedIndex = 0

  ngOnInit():void{}

  selectImage(index:number):void{
    this.selectedIndex=index;
  }

  onPrevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length -1;
    }else{
      this.selectedIndex--;
    }
  }

}
