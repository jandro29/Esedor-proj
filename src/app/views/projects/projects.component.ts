import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  paso1 = true;
  paso2 = false;
  paso3 = false;
  formulario = false;

  bgHover!: boolean;
  bgHoverTwo!: boolean;

  colorWhite = false;
  showForm!: boolean;

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  date: number = 2021;
  industry: string = 'Energética';
  client: string = 'Primax';
  styles: string = 'w-[40%]'
  display: string = 'hidden'
  imageTwo: string = 'hidden'
  image: string = 'assets/img/iphone.png';
  paragraphOne: string = 'Nuestro cliente tenía la necesidad de  involucrar a todos sus equipos dentro de esta tienda virtual y crear una plataforma de venta de productos y servicios de marketing.';
  paragraphTwo: string = 'Definir la nueva generación de productos digitales y crear su primera tienda virtual b2b de productos y servicios de marketing que ofrece primax';

  serviceList: Array<String> = [
    'INVESTIGACIÓN Y CONSULTORÍA',
    'DESCUBRIMIENTO DE PRODUCTO',
    'DISEÑO DE PRODUCTO',
    'DESIGN SYSTEM',
  ];

  definitionsList: Array<String> = [
    'SESIÓN DE ALCANCE',
    'AUDITORÍA UX/UI',
    'COMPORATAMIENTO DE USUARIOS',
    'SESIÓN DE ALCANCE',
    'DISEÑO VISUAL',
    'SESIONES DE EQUIPO',
    'IU/BIBLIOTECA DE PATRONES',
    'ESTRUCTURA DEL SITIO WEB',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Nueva'},
    {aos: 1000, label: 'experiencia'},
    {aos: 1000, label: 'ecommerce'},
    {aos: 1000, label: 'B2B'},
  ]

  firstText: string = 'Investigación y arquitectura de información';
  secondText: string = 'La búsqueda queda del insight de ux al entender a nuestros usuarios empatizando con ellos y creando escenarios y contextos donde puedan validar features, dentro de sesiones cognitivas de nuestros productos.  ';
  thirdText: string = '““Sesiones lúdicas y divertidas que puedan romper el hielo en cada usuario que deseamos explorar en las sesiones cognitivas“  “';
  fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'hidden';
  imageSection: any = 'assets/img/videollamada.png';


  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }



}
