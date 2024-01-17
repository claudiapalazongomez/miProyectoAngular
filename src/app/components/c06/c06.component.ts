import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c06',
  templateUrl: './c06.component.html',
  styleUrls: ['./c06.component.css'],
})
export class C06Component implements OnInit {
  unaCadenaDeCaracteres = 'Una variable que mostrar';
  unNumero = 1;
  unObjeto = { nombre: 'María José', apellido: 'Martínez', ciudad: 'Sevilla' };

  textoDelBoton = 'No clicado';
  numeroDeClic = 0;

  deportistas = ['Rafa Nadal', 'Carolina Marín', 'Andrés Iniesta', 'Pau Gasol'];

  miClaseFuente = 'has-text-primary';

  miClaseBoton = 'button is-success';

  unEstilo = 'red';

  constructor() {}
  ngOnInit(): void {}

  unClic() {
    console.log('clicado');
    this.numeroDeClic++;
    this.textoDelBoton = 'Clicado ' + this.numeroDeClic + ' veces';
  }

  cambioDeClase() {
    if (this.miClaseBoton === 'button is-success') {
      this.miClaseBoton = 'button is-danger';
    } else {
      this.miClaseBoton = 'button is-success';
    }
  }

  unaFuncion() {
    return 'blue';
  }
}
