import { Component, OnInit } from '@angular/core';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [20, 60, 24].map((n) => `https://picsum.photos/id/${n}/1366/550`);
  smallimages = [250, 15, 14].map((n) => `https://picsum.photos/id/${n}/500/270`);

  constructor(public _global:GlobalService,) { 
    _global.navStatus=true
    
  }
  ngOnInit(): void {
  }
  
}
