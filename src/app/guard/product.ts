import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017/6/26.
 */
@Injectable()
export class ProductResolve implements Resolve<Product>{
  constructor(public router:Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   let productId:number=route.params['id'];
   if(productId==1){
     return new Product(1,'iphone7',5889)
   }else{
     this.router.navigate(['/home'])
   }
  }

}
export class Product{
  constructor(public id:number,public name:string,public price:number){}
}
