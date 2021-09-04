import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [20, 5, 111].map((n) => `https://picsum.photos/id/${n}/1366/552`);
  smallimages = [250, 15, 14].map((n) => `https://picsum.photos/id/${n}/500/270`);
  constructor() { }

  ngOnInit(): void {
  }
  
}
