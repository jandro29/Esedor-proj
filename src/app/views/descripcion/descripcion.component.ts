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

  date: number = 2021;
  industry: string = 'Fintech';
  client: string = 'Redeban';
  imageTwo: string = 'hidden'
  image: string = 'assets/img/laptop-estadisticas.png';
  styles: string = 'lg:relative lg:bottom-[5rem] lg:left-[4rem] 2xl:bottom-0 2xl:left-0 2xl:w-[55%]'
  paragraphOne: string = 'Redeban es un banco de origen Colombiano, tenía como objetivo crear nuevos métodos de pago para los comercios y tarjetahabientes, además necesitaban identificar las necesidades del usuario.';
  paragraphTwo: string = 'Iniciamos con sesiones de entendimiento e ideación con el P.O y líderes del proyecto, una las principales tareas fue definir realmente los requerimiento de usuario y sistema, para llevar a cabo esta tarea definimos las historias de usuario, diseñamos un prototipo UX/UI y terminamos implementando la solución en Amazon Cloud.';

  serviceList: Array<String> = [
    'DISEÑO DE PRODUCTO',
    'DESARROLLO DE SOFTWARE',
  ];

  definitionsList: Array<String> = [
    'SESIÓN DE ALCANCE',
    'AUDITORÍA UX/UI',
    'COMPORATAMIENTO DE USUARIOS',
    'DISEÑO VISUAL',
    'SESIONES DE EQUIPO',
    'ESTRUCTURA DEL SITIO WEB',
  ]

  animatedTitle: Array<{aos: number, label:String}> = [
    {aos: 1000, label: 'Data Driven'},
    {aos: 1100, label: ' y producto'},
    {aos: 1200, label: ' digital'},
  ]

  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'Uno de los requerimientos del usuario era poder acceder a más información que les ayude a tomar mejores decisiones para impulsar las ventas en sus comercios.';
  // thirdText: string = '“Sesiones ludicas y divertidas que puedan romper el hielo en cada usuario que deseamos explorar en las sesiones cognitivas“';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayImage:any = "hidden"
  constructor() { }

  ngOnInit(): void {
    AOS.init()
  }

}
