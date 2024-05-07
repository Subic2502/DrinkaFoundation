import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import screenfull from 'screenfull';

@Component({
  selector: 'app-dela-i-prijatelji-page',
  templateUrl: './dela-i-prijatelji-page.component.html',
  styleUrl: './dela-i-prijatelji-page.component.css'
})
export class DelaIPrijateljiPageComponent implements AfterViewInit, OnInit {
  imageDesc: string = ''; // Initialize image description
  fullscreen: boolean = false;
  @ViewChild('galleria') galleria?: Galleria;
  onFullScreenListener: any;

  responsiveOptions:any[] = [
    {
        breakpoint: '1024px',
        numVisible: 5
    },
    {
        breakpoint: '768px',
        numVisible: 3
    },
    {
        breakpoint: '560px',
        numVisible: 1
    }
];

  ngOnInit(): void {
    this.galleria = this.galleria?.element.nativeElement.querySelector("p-galleria");
    console.log(this.galleria?.element.nativeElement);
  }

  ngAfterViewInit(): void {
    console.log(this.galleria?.element.nativeElement);
  }

  toggleFullScreen() {
    console.log("Kliknuo na sliku!");
    this.fullscreen = !this.fullscreen;

    const image = document.querySelector('.container img');
    if (image) {
      if (this.fullscreen) {
        // Enter fullscreen mode
        image.classList.add('fullscreen'); // Add a class for fullscreen styles
        document.body.classList.add('overflow-hidden'); // Prevent body scroll
      } else {
        // Exit fullscreen mode
        image.classList.remove('fullscreen');
        document.body.classList.remove('overflow-hidden');
      }
    }
  }

  closePreviewFullScreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    else if ((document as any)['mozCancelFullScreen']) {
      (document as any)['mozCancelFullScreen']();
    }
    else if ((document as any)['webkitExitFullscreen']) {
      (document as any)['webkitExitFullscreen']();
    }
    else if ((document as any)['msExitFullscreen']) {
      (document as any)['msExitFullscreen']();
    }
  }

  openPreviewFullScreen() {
    if (this.galleria) {
      let elem = this.galleria?.element.nativeElement.querySelector(".p-galleria");
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      }
      else if (elem['mozRequestFullScreen']) { /* Firefox */
        elem['mozRequestFullScreen']();
      }
      else if (elem['webkitRequestFullscreen']) { /* Chrome, Safari & Opera */
        elem['webkitRequestFullscreen']();
      }
      else if (elem['msRequestFullscreen']) { /* IE/Edge */
        elem['msRequestFullscreen']();
      }
    }

  }

  galleriaClass() {
    return `custom-galleria ${this.fullscreen ? 'fullscreen' : ''}`;
  }


  onFullScreenChange() {
    this.fullscreen = !this.fullscreen;
  }


  imagesSpomenici = [{
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/012.jpg',
    imageAlt: 'Prva slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/020.jpg',
    imageAlt: 'druga slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/025.jpg',
    imageAlt: 'treca slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/029.jpg',
    imageAlt: 'cetvrta slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/032.jpg',
    imageAlt: 'Peta slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/035.jpg',
    imageAlt: 'sesta slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/050.jpg',
    imageAlt: 'sedma slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/054.jpg',
    imageAlt: 'osma slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/055.jpg',
    imageAlt: 'deveta slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/058.jpg',
    imageAlt: 'deseta slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/059.jpg',
    imageAlt: 'tamo neka slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/062.jpg',
    imageAlt: 'tamo neka slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/065.jpg',
    imageAlt: 'tamo neka slika'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/0368.jpg',
    imageAlt: 'tamo neka slika'
  }
    , {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/080.jpg',
    imageAlt: 'tamo neka slika'
  }
    , {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/086.jpg',
    imageAlt: 'tamo neka slika'
  }
    , {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/089.jpg',
    imageAlt: 'tamo neka slika'
  }
  ]

  /*-----------------------slobodno vajarstvo-----------------------------------------------*/

  imagesSlVajarstvo = [{
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/097.jpg',
    imageAlt: 'Prva slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/098.jpg',
    imageAlt: 'druga slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/099.jpg',
    imageAlt: '3 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/101.jpg',
    imageAlt: '4 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/102.jpg',
    imageAlt: '5 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/107.jpg',
    imageAlt: '6 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/109.jpg',
    imageAlt: '7 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/110.jpg',
    imageAlt: '8 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/112.jpg',
    imageAlt: '9 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/113.jpg',
    imageAlt: '10 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/114.jpg',
    imageAlt: '11 slika'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/115.jpg',
    imageAlt: '12 slika'
  }
  ]

  /*-------------------------------prijatelji--------------------------------------------*/
  imagesPrijalelji = [{
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/131.jpg',
    imageAlt: 'Prva slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dejanMedakovic.jpg',
    imageAlt: '2 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dobricaCosic.jpg',
    imageAlt: '3 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dobricaCosic2.jpg',
    imageAlt: '4 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/matijaBeckovic.jpg',
    imageAlt: '5 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/micaPopovic.jpg',
    imageAlt: '6 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/rajkoPetrovNogo.jpg',
    imageAlt: '7 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/stevanRaickovic.jpg',
    imageAlt: '8 slika'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/stevanStanic.jpg',
    imageAlt: '9 slika'
  }
  ]
  /**-------------dela-------------------- */
  imagesDela = [{
    imageSrc: 'assets/carousel/dela/04%20Dela/162.jpg',
    imageAlt: 'Prva slika'
  }]

}
