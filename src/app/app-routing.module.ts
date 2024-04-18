import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { DelaIPrijateljiPageComponent } from './dela-i-prijatelji-page/dela-i-prijatelji-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'aboutMe', component: AboutMePageComponent },
  { path: 'aboutUs', component: AboutUsPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'delaIPrijatelji', component: DelaIPrijateljiPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
