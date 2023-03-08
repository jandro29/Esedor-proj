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
  display2: string = 'hidden'
  display: string = 'hidden'
  imageTwo: string = 'hidden'
  image: string = 'assets/img/laptop-notifai.png';
  paragraphOne: string = 'La empresa Notifai es una solución “SaaS” que permite automatizar las comunicaciones outbound usando inteligencia artificial, simplifica la contactabilidad de tus cobranzas usando bots de voz que se encargan de llamar de manera automatizada a cualquier usuario que sus clientes necesiten.';
  paragraphTwo: string = 'Al iniciar el proyecto Notifai contaba con un sistema previamente desarrollado por los propios fundadores. Realizamos diferentes métodos de investigación para poder ayudarlos a entender a sus clientes y sus necesidades.';

  serviceList: Array<String> = [
    'Sesión de alcance',
    'Auditoría UX/UI',
    'Hallazgos y features',
    'Arquitectura de información',
    'Flujograma de usuario',
    'Wireframes',
    'Diseño UI',
  ];

  definitionsList: Array<String> = [
    'Sesión de alcance',
    'Auditoría UX/UI',
    'COMPORATAMIENTO DE USUARIOS',
    'Diseño visual',
    'Sesiones de equipo',
    'Estructura del sitio web',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'Diseño y '},
    {aos: 1000, label: 'Desarrollo'},
    {aos: 1000, label: 'de software'},
  ]

  firstText: string = 'Investigación y problemática';
  secondText: string = 'En esta línea iniciamos con una evaluación heurística, recorridos cognitivos, experience y customer journey maps donde detectamos insight de ux que nos ayudarán a construir los nuevos lineamientos de diseño de las funcionalidades del sistema.';
  //thirdText: string = ' “During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. “ ';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'block';
  imageSection: any = 'assets/img/img-notifai.png';

  constructor() { }

  ngOnInit(): void {
    console.log("ghol"); // eslint-disable-line
  }

}
