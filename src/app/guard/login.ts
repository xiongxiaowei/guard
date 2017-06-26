import {CanActivate} from "@angular/router";
/**
 * Created by Administrator on 2017/6/26.
 */
export class Login implements CanActivate{
  canActivate(): boolean {
    let login:boolean=Math.random()>0.5;
    if (!login){
      console.log("用户未登录")
    }else {
      return login;
    }
  }

}
