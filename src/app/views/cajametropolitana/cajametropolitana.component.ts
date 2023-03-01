import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cajametropolitana',
  templateUrl: './cajametropolitana.component.html',
  styleUrls: ['./cajametropolitana.component.css']
})
export class CajametropolitanaComponent implements OnInit {

  colorWhite = false;

  date: number = 2021;
  industry: string = 'BANCA';
  client: string = 'Caja Metropolitana de Lima';
  styles: string = 'w-[100%] flex justify-end'
  display: string = 'hidden'
  image: string = 'assets/img/img-inicio-cajametropolitana.png';
  imageTwo: string = 'assets/img/cajametropolitana-logo.png';
  paragraphOne: string = 'La Caja Metropolitana de Lima es una empresa de operaciones bancarias múltiples y tiene por finalidad fomentar el ahorro, desarrollar el crédito de consumo en las modalidades de préstamos pignoraticios y personales.';
  paragraphTwo: string = 'Entender a toda la organización fue sumamente importante para alinear la visión del producto con los objetivos del negocio. El principal objetivo fue diseñar un homebanking intuitivo pero sobretodo seguro ';


  serviceList: Array<String> = [
    'Descubrimiento de producto',
    'DISEÑO DE PRODUCTO',
    'DESARROLLO Front-End',
    'Desarrollo',
  ];

  definitionsList: Array<String> = [
    'Impact Mapping',
    'UX Roadmap',
    'User flow',
    'Wireframes',
    'Diseño UI Desktop Tablet y Responsive',
    'Diseño UI App iOS Nativo',
    'Diseño UI de App Android Nativo',
    'Desarrollo Front end',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [

    {aos: 1000, label: 'Data Driven'},
    {aos: 1000, label: 'y producto'},
    {aos: 1000, label: 'digital'},
  ]


  firstText: string = 'Homebanking';
  secondText: string = 'Definimos la estrategia implementando un road map de UX que le permitiera priorizar y organizar todo el proyecto identificando los beneficios, necesidades y objetivos de negocio. El equipo de diseño UX ejecutó cada una las historias de usuario identificadas para crear la nueva interfaz de usuario.';
  displayImage:string = 'hidden'
  constructor() { }

  ngOnInit(): void {
  }

}
