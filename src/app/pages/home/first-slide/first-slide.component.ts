import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-slide',
  templateUrl: './first-slide.component.html',
  styleUrls: ['./first-slide.component.css']
})
export class FirstSlideComponent implements OnInit {
  images = [20, 60, 24].map((n) => `https://picsum.photos/id/${n}/1366/550`);
  constructor() { }

  ngOnInit(): void {
  }

}
