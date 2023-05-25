import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticlesModule } from './articles/articles.module';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    ArticlesModule,
    StaticpagesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
