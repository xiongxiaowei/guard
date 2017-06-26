import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NewsComponent} from "./news/news.component";
import {TvComponent} from "app/tv/tv.component";
import {Login} from "./guard/login";
import {Leave} from "./guard/leave";
import {ProductComponent} from "./product/product.component";
import {ProductResolve} from "app/guard/product";

const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path:'news',
    component:NewsComponent,
    canActivate:[Login],
    canDeactivate:[Leave]
  },
  {
    path:'tv',
    component:TvComponent
  },
  {
    path:'product/:id',
    component:ProductComponent,
    resolve:{
      product:ProductResolve
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
