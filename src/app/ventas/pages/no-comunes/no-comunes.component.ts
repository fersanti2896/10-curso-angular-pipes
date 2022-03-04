import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  /* i18nSelect */
  nombre: string = 'Aline';
  genero: string = 'femenino';
  invitacionMap = {
    'masculino': 'invitarlo', 
    'femenino' : 'invitarla'
  }

  /* i18nPlural */
  clientes: string[] = ['Wendy', 'Fernando', 'Sarahí', 'Aline'];
  clientesMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  }
}
