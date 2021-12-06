import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  width = window.innerWidth;
  status = localStorage.getItem('logged in');
  menuOpen = false;

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      this.width = window.innerWidth;
    });
  }

  handleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  logIn() {
    if (!localStorage.getItem('logged in')) {
      localStorage.setItem('logged in', 'true');
    }
  }

  logOut() {
    localStorage.removeItem('logged in');
  }
}
