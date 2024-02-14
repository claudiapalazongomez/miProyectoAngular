import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css'],
})
export class C10Component implements OnInit {
  miFormulario = new FormGroup({
    nombre: new FormControl(''),
    color: new FormControl(''),
    adulto: new FormControl(''),
  });
  constructor() {}
  ngOnInit() {}
  clic(datos: any) {
    console.log(datos);
  }
}
