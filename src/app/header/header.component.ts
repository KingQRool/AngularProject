import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  navbarfixed : boolean = false;

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
}


// {
// id: 1,
// name: 'Inicio',
// },

// }
