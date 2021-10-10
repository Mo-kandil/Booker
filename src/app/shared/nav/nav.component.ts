import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  nav_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.nav_variable=true;
    }else{
      this.nav_variable=false;
    }
  }

  toContact(){
    window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
  }
  toAbout(){
    window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
  }
}
