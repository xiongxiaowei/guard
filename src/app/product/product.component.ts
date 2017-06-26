import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, ProductResolve} from "../guard/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:Product;
  constructor(private routeInfo:ActivatedRoute) {
    this.routeInfo.data.subscribe((data:{product:Product})=>{
      this.product=data.product
    })
  }

  ngOnInit() {
  }

}
