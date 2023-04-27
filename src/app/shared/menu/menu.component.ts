import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
})

export class MenuComponent {
  items: MenuItem[] = [];

  ngOnInit() {

    //organizo los items del menu con sus rutas

      this.items = [
        {
            label: 'Pipes de Angular',
            icon : 'pi pi-desktop',
            items: [
                {
                    label: 'Texto y fechas',
                    icon : 'pi pi-align-left',
                    routerLink: '/'
            },

                {
                    label: 'Números',
                    icon: 'pi pi-dollar',
                    routerLink: 'numeros'
                },
                {
                    label: 'No comunes',
                    icon: 'pi pi-globe',
                    routerLink: 'no-comunes'
                },
                {
                    label: '',
                    icon: '',
                    routerLink: ''
                },
            ]
        },
        {
            label: 'Personalizados',
            icon: 'pi pi-cog',
            routerLink: 'ordenar'
        }
      ];
  }
}
