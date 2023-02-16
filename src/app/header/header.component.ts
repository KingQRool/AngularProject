import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  headerList = [
    {id:1,
    name:'Inicio',
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
  }
]
}


// {
// id: 1,
// name: 'Inicio',
// },

// }
