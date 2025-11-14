import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navbar = document.querySelector("nav");
    const dropdownMenu = document.querySelector(".dropdown-menu");
    const dropdownButton = document.querySelector(".dropdown-toggle");

    if (window.scrollY > 0) {
      navbar?.classList.add("abajo");
      dropdownMenu?.classList.add("abajo");
      dropdownButton?.classList.add("abajo");
    } else {
      navbar?.classList.remove("abajo");
      dropdownMenu?.classList.remove("abajo");
      dropdownButton?.classList.remove("abajo");
    }
  }
}