import { Component, OnInit } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {

  colorWhite = false;
  showForm!: boolean;

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  arrowhidden: string= 'hidden'
  date: number = 2021;
  industry: string = 'Fintech';
  client: string = 'Redeban';
  display2: string= 'hidden';
  imageTwo: string = 'hidden';
  optionImg: string = 'lg:w-[550px] lg:mx-[0px]'
  image: string = 'assets/img/laptop-estadisticas.png';
  styles: string = 'lg:relative lg:bottom-[5rem] lg:left-[4rem] 2xl:bottom-0 2xl:left-0 2xl:w-[55%]'
  paragraphOne: string = 'Redeban es un banco de origen Colombiano facilitador de la industria de medios de pago, desarrolla soluciones innovadoras y seguras para pagos electrónicos mediante el uso de los datafonos.';
  paragraphTwo: string = 'Al iniciar contaban con un sistema previamente desarrollado por el equipo de ingenieros, el reto fue llevar la experiencia al siguiente nivel. Nos reunimos con diferentes stakeholders de la empresa para entender sus necesidades. Permitimos a los usuarios tomar decisiones basadas en datos con una experiencia intuitiva en la ejecución de tareas dentro del sistema. ';

  serviceList: Array<String> = [
    'DESCUBRIMIENTO DE PRODUCTO',
    'DISEÑO DE PRODUCTO',
    'DESARROLLO DE SOFTWARE',
  ];

  definitionsList: Array<String> = [
    'Historias de usuario',
    'Auditoría UX/UI',
    'Hallazgos y features',
    'Arquitectura de información',
    'Flujograma de usuario',
    'Wireframes',
    'Diseño UI',
    'Desarrollo de software',
  ]

  animatedTitle: Array<{aos: number, label:String}> = [
    {aos: 1000, label: 'Data Driven'},
    {aos: 1100, label: ' y producto'},
    {aos: 1200, label: ' digital'},
  ]

  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'Se implementó una nueva forma de visualizar los datos existentes y nuevos. Con la ayuda de los analistas de datos definimos nuevos gráficos de visualización de datos que le permitieran al usuario procesar datos de manera casi magistral.';
  thirdText: string = 'Enfoque: inicialmente nos centramos en darle prioridad a los problemas detectados actualmente en el sistema de esta forma agilizamos la entrega de los primeros Sprint. Las nuevas necesidades fueron priorizadas en base a una puntuación y fueron implementadas en el primer release. Las de mayor puntuación las dejamos en el backlog.';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayImage:any = "hidden"
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
