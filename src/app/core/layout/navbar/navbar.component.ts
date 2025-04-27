import {  Component, HostListener, OnInit } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';


@Component({
  selector: 'app-navbar',
  imports: [DrawerModule, ButtonModule, MenuModule, RouterLink, MenubarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host:{ngSkipHydration: 'true'}
})
export class NavbarComponent implements OnInit{
  public sidebarVisible: boolean = false;
  public isMobile: boolean = false;
  public isDarkTheme: boolean = false;

  ngOnInit() {
    this.isMobile = window.innerWidth < 768;
  }


  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSidebar() {
    // Toggle the sidebar visibility
    console.log("Sidebar toggled");
    console.log(this.sidebarVisible);
    this.sidebarVisible = !this.sidebarVisible;
  }

  toggleTheme() {
    const element = document.querySelector('html');
    element?.classList.toggle('my-app-dark');
    console.log(element);
    this.isDarkTheme = !this.isDarkTheme;

  }

}
