import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informatica',
  templateUrl: './informatica.component.html',
  styleUrls: ['./informatica.component.css']
})
export class InformaticaComponent implements OnInit {

  colorWhite = false;
  showForm!: boolean;

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  date3: string = 'CLIENTE';
  date2: string = 'informatica.pe';
  industry3: string = 'Featured';
  industry2: string = 'Design Rush featured in “Luxury websites design”';
  date: number = 2021;
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'Infomatica';
  hiddenhead: string = 'hidden';
  styles: string = 'w-[100%] lg:ml-20 2xl:ml-40'
  display: string = 'hidden'
  optionImg: string = 'lg:w-[670px] 2xl:w-[850px] mt-[-320px] lg:mt-[-100px] xl:mt-[-230px] 2xl:mt-[-50px]'
  image: string = 'assets/img/informatica-inicio.png';
  imageTwo: string = 'assets/img/informatica-logo.png';
  paragraphOne: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. ';
  paragraphTwo: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. ';


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

  firstText: string = 'Visualización de datos P2P y P2M';
  secondText: string = 'During these uncertain times, many of us find ourselves in introspection mode, with new ideas and resolving to do better. We wish we could help everyone and fix everything. ';
  displayImage:string = 'hidden'

  constructor() { }

  ngOnInit(): void {
  }

}
