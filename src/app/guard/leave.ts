import {CanDeactivate} from "@angular/router";
import {NewsComponent} from "../news/news.component";

/**
 * Created by Administrator on 2017/6/26.
 */
export class Leave implements CanDeactivate<NewsComponent>{
  canDeactivate(component:NewsComponent){
    return window.confirm('还未保存确认要离开吗？');
  }

}
