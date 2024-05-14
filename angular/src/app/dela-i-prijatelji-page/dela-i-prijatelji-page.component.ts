import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Galleria } from 'primeng/galleria';
import screenfull from 'screenfull';
import {TabViewModule} from 'primeng/tabview';


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
    imageAlt: 'Spomenik Karađorđu u Orašcu,nalazi se u okviru spomen kompleksa Orašac, ispred OŠ "Prvi srpski ustanak"'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/020.jpg',
    imageAlt: 'Živojin Mišić'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/025.jpg',
    imageAlt: 'Stepa Stepanović'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/029.jpg',
    imageAlt: 'Drinka i spomenik Milošu Obrenoviću.'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/032.jpg',
    imageAlt: 'Spomenik Tanasku Rajiću( 1998. )'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/035.jpg',
    imageAlt: 'Spomenik Svetom vladici Nikolaju Velimiroviću - Soko Grad'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/050.jpg',
    imageAlt: 'Spomenik Nikoli Tesli na Beogradskom Aerodromu'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/054.jpg',
    imageAlt: 'Nikola Tesla '
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/055.jpg',
    imageAlt: 'Mihajlo Pupin ( 1992. )'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/058.jpg',
    imageAlt: 'Đorđe Stanojević - Beograd'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/059.jpg',
    imageAlt: 'Jovan Cvijić - Loznica'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/062.jpg',
    imageAlt: 'Filip Višnjić '
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/065.jpg',
    imageAlt: 'Jovan Dučić'
  }, {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/068.jpg',
    imageAlt: 'Miloš Crnjanski - Kalemegdan'
  },
  {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/080.jpg',
    imageAlt: 'Karađorđe i Kralj Petar I'
  },
  {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/086.jpg',
    imageAlt: 'Dositej Obradović'
  }
    , {
    imageSrc: 'assets/carousel/spomenici/01%20Spomenici/089.jpg',
    imageAlt: 'Miloš Crnjanski i Desanka Maksimović'
  }
  ]

  /*-----------------------slobodno vajarstvo-----------------------------------------------*/

  imagesSlVajarstvo = [{
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/097.jpg',
    imageAlt: 'Rado ide iz Srbije u vojnike ( 1989. )'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/098.jpg',
    imageAlt: 'Posle Kajmačkalana ( 1989. )'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/099.jpg',
    imageAlt: 'Hadži Prodanova buna ( 1990. )'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/101.jpg',
    imageAlt: 'Kolar( 1992. ) i Potkivač Zobnatnica( 1992. )'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/102.jpg',
    imageAlt: 'Deca Sergeja Jesenjina() i Dečak i pas()'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/107.jpg',
    imageAlt: 'Konj( 1990. )'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/109.jpg',
    imageAlt: 'Pas - Beograd (1982.)'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/110.jpg',
    imageAlt: 'Pas - Beograd (1982.)'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/112.jpg',
    imageAlt: 'Slobodno vajarstvo - mačka'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/113.jpg',
    imageAlt: 'Vuk (1990.)'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/114.jpg',
    imageAlt: 'Puma(1989.) i Medved(1980.)'
  }, {
    imageSrc: 'assets/carousel/slobodnoVajarstvo/02%20Slobodno%20vajarstvo/115.jpg',
    imageAlt: 'Lav(1990.)'
  }
  ]

  /*-------------------------------prijatelji--------------------------------------------*/
  imagesPrijalelji = [{
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/131.jpg',
    imageAlt: 'Pesma Slobodana Markovića SFINGA- Napisana na vratima Drinkinog ateljea'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dejanMedakovic.jpg',
    imageAlt: 'Dejan Medaković'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dobricaCosic.jpg',
    imageAlt: 'Dobrica Ćosić'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/dobricaCosic2.jpg',
    imageAlt: 'Dobrica Ćosić'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/matijaBeckovic.jpg',
    imageAlt: 'Matija Bećković'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/micaPopovic.jpg',
    imageAlt: 'Mića Popović'
  }, {
    imageSrc: 'assets/carousel/prijatelji/03%20Prijatelji/rajkoPetrovNogo.jpg',
    imageAlt: 'Rajko Petrov Nogo, Stevan Raičković i Stevan Stanić'
  }
  ]
  /**-------------dela-------------------- */
  imagesDela = [{
    imageSrc: 'assets/carousel/dela/04%20Dela/162.jpg',
    imageAlt: 'Popis Drinkinih dela'
  }]

}
