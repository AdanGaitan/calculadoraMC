import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  edad=25;
  peso=60;
  altura=170;

  constructor() { }

  ngOnInit(): void {
  }

  cambiarAltura(evento: any)
  {
       this.altura = evento.target.value;
  }

}
