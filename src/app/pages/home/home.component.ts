import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEvent } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-view-model';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  constructor(public _global:GlobalService,) { 
    _global.navStatus=true
    
  }
  ngOnInit(): void {
  }
  
}
