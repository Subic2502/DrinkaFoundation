import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { LightboxModule } from 'ngx-lightbox';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ScrollService } from './scroll.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryLightboxComponent } from './gallery-lightbox/gallery-lightbox.component';
import { DelaIPrijateljiComponent } from './dela-i-prijatelji/dela-i-prijatelji.component';
import { DelaIPrijateljiPageComponent } from './dela-i-prijatelji-page/dela-i-prijatelji-page.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from './carousel/carousel.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    AboutUsComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    AboutMePageComponent,
    AboutUsPageComponent,
    ContactPageComponent,
    DelaIPrijateljiComponent,
    DelaIPrijateljiPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    CarouselModule
  ],
  exports:[TabsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
