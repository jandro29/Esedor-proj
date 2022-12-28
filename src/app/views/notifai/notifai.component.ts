import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifai',
  templateUrl: './notifai.component.html',
  styleUrls: ['./notifai.component.css']
})
export class NotifaiComponent implements OnInit {

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
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'Notifai';
  styles: string = 'w-[100%] '
  display: string = 'hidden'
  imageTwo: string = 'hidden'
  image: string = 'assets/img/laptop-notifai.png';
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
    {aos: 1000, label: 'Brading y'},
    {aos: 1000, label: 'Design system'},
  ]

  firstText: string = 'Investigación y definición de experiencia de cliente (CX)';
  secondText: string = 'Realizamos sesiones de trabajo con el cliente y los usuarios involucrados para poder entender los recorridos de cada cliente y perfil de usuario, generamos escenarios hipotéticos que le permitieran ver las oportunidades de mejora.';
  thirdText: string = ' “During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. “ ';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'block';
  imageSection: any = 'assets/img/img-notifai.png';

  constructor() { }

  ngOnInit(): void {
    console.log("ghol"); // eslint-disable-line
  }

}
