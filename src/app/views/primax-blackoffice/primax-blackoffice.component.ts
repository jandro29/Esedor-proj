import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primax-blackoffice',
  templateUrl: './primax-blackoffice.component.html',
  styleUrls: ['./primax-blackoffice.component.css']
})
export class PrimaxBlackofficeComponent implements OnInit {

  colorWhite = false;

  constructor() { }

  ngOnInit(): void {
  }

  date: number = 2021;
  industry: string = 'BANCA';
  client: string = 'Primax-Backoffice';
  styles: string = 'w-[100%] '
  display: string = 'hidden'
  optionImg:string='2xl:mt-[140px]'
  imageTwo: string = 'assets/img/primax-solutionsicono.png'
  image: string = 'assets/img/primera-img-primax-backoffice-.png';
  paragraphOne: string = 'Primax es una de las empresas del Grupo Romero y cuenta con la más importante red de estaciones de servicio de venta de combustibles y tiendas por conveniencia en el Perú y Ecuador.';
  paragraphTwo: string = 'Al iniciar el proyecto nos topamos con un producto previamente desarrollado llamado “Primax Solutions” este sistema fue la base de la nueva experiencia de usuario';

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


  firstText: string = 'Diseño centrado en el humano';
  secondText: string = 'La información relevante se podía ver en un vistazo, ser rápido de escanear y fácil de entender. Es por eso, cuando hablamos de mejorar sistema interactivo, hablamos de dos ejes importantes:';
  thirdText: string = '1. Proporcionar una descripción general hermosa, simple y procesable de las transacciones de los usuarios.';
  optionOne: string = 'ㅤ';
  optionTwo: string = '2. Resaltar acciones relevantes e información crítica para que los usuarios resuelvan sus preguntas, gestionen problemas y, en consecuencia, reduzcan la sobrecarga de solicitudes de atención al cliente.';
  displayImage:string = 'hidden'
}
