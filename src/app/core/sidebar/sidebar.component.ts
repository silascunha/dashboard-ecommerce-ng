import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  linksPrincipais = linksMenuPrincipal;

  constructor() { }

  ngOnInit(): void {
  }

}

const linksMenuPrincipal = [
  {
    path: '/dashboard',
    label: 'Visão geral',
    icone: 'dashboard'
  },
  {
    path: '/produtos',
    label: 'Produtos',
    icone: 'inventory_2'
  },
  {
    path: '/clientes',
    label: 'Clientes',
    icone: 'people'
  },
  {
    path: '/pedidos',
    label: 'Pedidos',
    icone: 'inventory'
  },
  {
    path: '/compras',
    label: 'Compras',
    icone: 'shopping_cart'
  },
  {
    path: '/configuracoes',
    label: 'Configurações',
    icone: 'settings'
  }
]