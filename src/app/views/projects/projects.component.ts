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
  display2: string = 'hidden'
  optionImg: string = 'w-[350px] 2xl:mt-[80px]'
  imageTwo: string = 'assets/img/iphone.png'
  image: string = 'assets/img/iphone.png';
  paragraphOne: string = 'Primax es una de las empresas del Grupo Romero y cuenta con la más importante red de estaciones de servicio de venta de combustibles y tiendas por conveniencia en el Perú y Ecuador.';
  paragraphTwo: string = 'Al iniciar el proyecto enfocamos el producto digital para que pueda cubrir las necesidades de los diferentes clientes de la marca en Perú y Ecuador, creando un ecommerce donde cada cliente encuentra lo que busca.';

  serviceList: Array<String> = [
    'Investigación y consultoría',
    'Descubrimiento de Producto',
    'Diseño de Producto',
    'Design System',
  ];

  definitionsList: Array<String> = [
    'UX Roadmap',
    'Impact mapping',
    'Hallazgos y features',
    'Arquitectura de información',
    'Flujograma de usuario',
    'Wireframes',
    'Diseño UI',
    'Design System',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Nueva'},
    {aos: 1000, label: 'experiencia'},
    {aos: 1000, label: 'ecommerce'},
    {aos: 1000, label: 'B2B'},
  ]

  firstText: string = 'La investigación que se trabajó, fue en base a dos pilares importantes.';
  secondText: string = 'Orientación comercial:‍‍‍‍‍ el foco inicial fue en la facilidad de acceder, encontrar y comprar productos de Primax y Pecsa. En esta línea, conceptualizamos un buscador inteligente, Trabajamos además en filtros amigables y visuales que permiten explorar fácilmente en las listas de productos y en todas las casuísticas promocionales en diferentes momentos para el usuario';
  thirdText: string = 'Biblioteca de recursos: uno de los objetivos de Primax es poder atender otras necesidades del negocio. En este nuevo sistema interactivo creamos un módulo llamado “Biblioteca” que permite explorar fácilmente y descargar recursos de marketing promocional como videos promocionales, banners impresos, materiales POP, afiches y hasta audios.';
  fourthText: string = 'Cómo empatizar con ellos';

  imageSection: any = 'assets/img/videollamada.jpg';


  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }



}
