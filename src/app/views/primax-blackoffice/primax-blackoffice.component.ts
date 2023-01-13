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
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'Primax-Backoffice';
  styles: string = 'w-[100%] '
  display: string = 'hidden'
  imageTwo: string = 'assets/img/primax-solutionsicono.png'
  image: string = 'assets/img/primera-img-primax-backoffice-.png';
  paragraphOne: string = 'Nuestro cliente es una solución SaaS que permite automatizar las comunicaciones outbound usando bots de inteligencia artificial, tenía como objetivo posicionar su marca y realizar investigación en sus usuarios actuales para realizar mejoras en su producto digital.';
  paragraphTwo: string = 'Pasamos muchas horas con el equipo de Notifai identificando el viaje de cliente, a partir de ahí , identificamos oportunidades y puntos de estrés, que validamos con usuarios con sesiones de recorrido cognitivo, mejorando las funcionalidades del sistema.';

  serviceList: Array<String> = [
    'DESCUBRIMIENTO DE PRODUCTO',
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

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Data Driven'},
    {aos: 1000, label: 'y producto'},
    {aos: 1000, label: 'digital'},
  ]


  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. ';
  displayImage:string = 'hidden'
}
