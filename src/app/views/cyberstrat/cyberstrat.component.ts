import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberstrat',
  templateUrl: './cyberstrat.component.html',
  styleUrls: ['./cyberstrat.component.css']
})
export class CyberstratComponent implements OnInit {
  colorWhite = false;

  date: number = 2021;
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'CyberStrat';
  styles: string = 'w-[100%] flex lg:justify-end'
  display: string = 'hidden'
  image: string = 'assets/img/primera-imgcyberstrat.png';
  imageTwo: string = 'assets/img/cyberstrat-logo.png';
  paragraphOne: string = 'Es una Startup que ofrece planificación estratégica con ayuda de un asistente de voz llamado C.I.A.(Cyberstrat Interactive Assistance), esta herramienta ayudará a generar big data competitiva más granular y mucho más rápido. Además, las ideas y el plan se pueden compartir y discutir en toda la organización, democratizando así el proceso de planificación.';
  paragraphTwo: string = 'Al iniciar el proyecto teníamos el reto de crear un MLP de un sistema interactivo que ofreciera digitalizar las herramientas estratégicas e impulsar la colaboración entre la organización a tiempo real usando la virtualización.';


  serviceList: Array<String> = [
    'INTEGRATED',
    'CAMPIGN',
    'HYPE FILM',
    'TECH FILM',
    'KEY VISUAL',
    'SOCIAL TEASERS',
  ];

  definitionsList: Array<String> = [
    'STRATEGY',
    'CONCEPT',
    'ART DIRECTION',
    'DESIGN',
    'PRODUCTION',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [

    {aos: 1000, label: 'Data Driven'},
    {aos: 1000, label: 'y producto'},
    {aos: 1000, label: 'digital'},
  ]

  firstText: string = 'Asistente de voz';
  secondText: string = 'En el proceso de descubrimiento nos enfocamos en poder tener una interacción más cercana creando a C.I.A. (Cyberstrat Interactive Assistance) basado en un diseño conversacional a medida con una lógica enfocada en ayudar a los negocios a tomar mejores decisiones e informales que esta pasando en todo momento con sus negocios.';
  displayImage:string = 'hidden'


  constructor() { }

  ngOnInit(): void {
  }

}
