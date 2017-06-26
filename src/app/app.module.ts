import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { TvComponent } from './tv/tv.component';
import {Login} from "./guard/login";
import {Leave} from "./guard/leave";
import { ProductComponent } from './product/product.component';
import {ProductResolve} from "./guard/product";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    NewsComponent,
    TvComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [Login,Leave, ProductResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
