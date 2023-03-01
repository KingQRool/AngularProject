import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarfixed: boolean = false;

  headerList = [
    {
      id: 1,
      name: 'Inicio',
      path: '/Inicio'
    },
    {
      id: 2,
      name: 'Clientes',
      path: '/Clientes'
    },
    {
      id: 3,
      name: 'Prestamos',
      path: '/Prestamos'
    },
    {
      id: 4,
      name: 'Productos',
      path: '/Productos'
    }
  ]
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}


// {
// id: 1,
// name: 'Inicio',
// },

// }
