import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  // i18nSelect
  nombre: string = 'Edwin';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clienteMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos # cliente esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre == 'Edwin' ? (this.nombre = 'Laura') : (this.nombre = 'Edwin');
    this.genero == 'masculino'
      ? (this.genero = 'femenino')
      : (this.genero = 'masculino');
  }

  borrarCliente() {
    this.clientes.pop();
  }

  // KeyValue Pipe
  persona = {
    nombre: 'Edwin',
    edad: 23,
    direccion: 'San Gil, Santander',
  };
}
