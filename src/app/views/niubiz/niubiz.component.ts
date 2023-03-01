import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niubiz',
  templateUrl: './niubiz.component.html',
  styleUrls: ['./niubiz.component.css']
})
export class NiubizComponent implements OnInit {


  colorWhite = false;

  date: number = 2021;
  industry: string = 'BANCA';
  client: string = 'Niubiz';
  styles: string = 'w-[100%] lg:ml-20'
  display: string = 'hidden'
  image: string = 'assets/img/primeraimg-niubiz.png';
  imageTwo: string = 'assets/img/niubiz-logo.png';
  paragraphOne: string = 'VisaNet ahora es Niubiz empresa con 22 años de experiencia, brindan soluciones a medida, que mejoren y simplifiquen las experiencias de sus clientes.';
  paragraphTwo: string = 'Nos encargamos de diseñar la experiencia de su nuevo sistema interactivo que tenía como objetivo principal agilizar la colaboración de diferentes áreas para mejorar los servicios de integración de APIs.';


  serviceList: Array<String> = [
    'Descubrimiento de producto',
    'Diseño De Producto',
  ];

  definitionsList: Array<String> = [
    'Impact Mapping',
    'Product Visión',
    'Design Sprint',
    'User flow',
    'Wireframes',
    'Diseño UI Desktop',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [

    {aos: 1000, label: 'Data Driven'},
    {aos: 1000, label: 'y producto'},
    {aos: 1000, label: 'digital'},
  ]


  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'La información relevante se podía ver en un vistazo, ser rápido de escanear y fácil de entender. Es por eso, cuando hablamos de mejorar sistema interactivo, hablamos de dos ejes importantes:';
  thirdText: string = '1.Proporcionar una descripción general hermosa, simple y procesable de las transacciones de los usuarios.ㅤ⠀ㅤㅤ⠀ㅤㅤ⠀⠀ㅤ⠀ㅤㅤ⠀ㅤㅤ⠀⠀ㅤ⠀ㅤㅤ⠀ㅤㅤ⠀⠀ㅤ⠀ㅤㅤ⠀ㅤㅤ⠀⠀ㅤ⠀ㅤㅤ⠀ㅤㅤ⠀⠀ㅤ 2. Resaltar acciones relevantes e información crítica para que los usuarios resuelvan sus preguntas, gestionen problemas y, en consecuencia, reduzcan la sobrecarga de solicitudes de atención al cliente. '
  displayImage:string = 'hidden'

  constructor() { }

  ngOnInit(): void {
  }

}
