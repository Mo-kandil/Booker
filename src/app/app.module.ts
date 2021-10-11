import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShopComponent } from './pages/shop/shop.component';
import { ShopCartComponent } from './pages/shop/shop-cart/shop-cart.component';
import { FirstSlideComponent } from './pages/home/first-slide/first-slide.component';
import { PossibilitiesComponent } from './pages/home/possibilities/possibilities.component';
import { AboutUsComponent } from './pages/home/about-us/about-us.component';
import { BookShowcaseComponent } from './pages/home/book-showcase/book-showcase.component';
import { YoutubeVidComponent } from './pages/home/youtube-vid/youtube-vid.component';
import { ContactUsComponent } from './pages/home/contact-us/contact-us.component';
import { PerformanceComponent } from './pages/home/performance/performance.component'


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ShopComponent,
    ShopCartComponent,
    FirstSlideComponent,
    PossibilitiesComponent,
    AboutUsComponent,
    BookShowcaseComponent,
    YoutubeVidComponent,
    ContactUsComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
