import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripley',
  templateUrl: './ripley.component.html',
  styleUrls: ['./ripley.component.css']
})
export class RipleyComponent implements OnInit {

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
  industry: string = 'RETAIL';
  client: string = 'Ripley';
  styles: string = 'w-[100%] '
  display: string = 'hidden'
  imageTwo: string = 'hidden'
  image: string = 'assets/img/Ripley-FP.png';
  paragraphOne: string = 'Ripley es una empresa de retail en Perú y Chile, su objetivo era migrar su sistema de puntos a la nube, teniendo como primer objetivo rediseñar el producto actual';
  paragraphTwo: string = 'Realizamos sesiones de trabajo con los equipos técnicos para entender un sistema que fue creado hace más de 8 años, listando los requerimientos del sistema, una vez identificado a los usuarios realizamos entrevistas de usuario y recorridos cognitivos. Identificamos los requerimientos del usuario, creamos un nuevo prototipo y utilizamos su sistema de diseño llamado “Morita” para el diseño UI y Frontend. Migramos a la nube todo el sistema con ayuda del equipo de arquitectos y backend. ';

  serviceList: Array<String> = [
    'DESCUBRIMIENTO DE PRODUCTO',
    'DISEÑO DE PRODUCTO',
  ];

  definitionsList: Array<String> = [
    'SESIÓN DE ALCANCE',
    'AUDITORÍA UX/UI',
    'DISEÑO VISUAL',
    'SESIONES DE EQUIPO',
    'ESTRUCTURA DEL SITIO WEB',
  ]

  animatedTitle: Array<{aos: number, label: String}> = [
    {aos: 1000, label: 'UX redisign'},
    {aos: 1000, label: '& Migración'},
  ]

  firstText: string = 'Auditoría UX';
  secondText: string = 'Realizamos una revisión exhaustiva del sistema actual, haciendo uso de la heurística detectamos una serie de oportunidades que le permitieran mejorar en el rediseño del nuevo sistema de puntos de Ripley.';
  thirdText: string = '';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'block';
  imageSection: any = 'assets/img/Ripley-A-D.png';

  constructor() { }

  ngOnInit(): void {
  }

}
