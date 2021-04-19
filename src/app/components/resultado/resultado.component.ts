import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss']
})
export class ResultadoComponent implements OnInit {

  bmi:number;
  resultado:string;
  interpretacion:string;
  constructor(private route:ActivatedRoute) 
  { 
    this.resultado='';
    this.interpretacion='';
    this.bmi = +route.snapshot.paramMap.get('valor')!;


  }

  ngOnInit(): void 
  {
    this.getResultado();
  }


  getResultado()
  {
    if(this.bmi >=25)
    {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tiene un peso corporal superiol al normal. Intente hacer mas ejercicio';
    }
    else if(this.bmi >= 18.5)
    {
      this.resultado = 'Normal';
      this.interpretacion = 'Tines un peso corporal normal. ¡Buen trabajo!'
    }
    else
    {
      this.resultado = 'Bajo Peso';
      this.interpretacion = 'tienes un peso corporal mas bajo de lo normal.Puedes comer un poco mas';
    }
  }



}
