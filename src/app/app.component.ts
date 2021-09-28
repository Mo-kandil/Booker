import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  // showLoading = true;
  constructor(private _router : Router , public _globalService:GlobalService){
    // setTimeout(() => {
    //   this.showLoading= false;
    // }, 2000 );
    
    // this._router.events.subscribe((routerEvent:Event) => {
    //   if(routerEvent instanceof NavigationStart ){
    //     this.showLoading=true;
    //   }
    //   if(routerEvent instanceof NavigationEnd ||
    //       routerEvent instanceof NavigationCancel||
    //       routerEvent instanceof NavigationError){
    //     this.showLoading=false
    //   }
    // });

  };
  title = 'myTheme';
}
