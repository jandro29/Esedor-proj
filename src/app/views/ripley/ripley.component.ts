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
  image: string = 'assets/img/Ripley-FP.png';
  paragraphOne: string = 'Ripley es una empresa de retail en Perú y Chile, su objetivo era migrar su sistema de puntos a la nube, teniendo como primer objetivo rediseñar el producto actual';
  paragraphTwo: string = 'Realizamos una auditoría UX que le permitiera tener a Ripley los puntos a mejorar del sistema actual e hicimos un diseño UX/UI alineado a los requerimientos del sistema.';

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

  firstText: string = 'Auditoría de Experiencia de Usuario';
  secondText: string = 'Realizamos una revisión exhaustiva del sistema actual, haciendo uso de la heurística detectamos una serie de oportunidades que le permitieran mejorar en el rediseño del nuevo sistema de puntos de Ripley.';
  thirdText: string = ' “During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. “ ';
  // fourthText: string = 'Cómo empatizar con ellos';
  displayContent: any = 'block';
  imageSection: any = '../../../assets/img/Ripley-A-D.png';

  constructor() { }

  ngOnInit(): void {
  }

}
