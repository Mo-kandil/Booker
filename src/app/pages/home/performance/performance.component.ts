import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css']
})
export class PerformanceComponent implements OnInit {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  
  smallimages = [250, 15, 14].map((n) => `https://picsum.photos/id/${n}/500/270`);

  constructor() { }

  ngOnInit(): void {
  }

}
