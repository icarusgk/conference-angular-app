import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  width = window.innerWidth;
  menuOpen = false;

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    })
  }

}
