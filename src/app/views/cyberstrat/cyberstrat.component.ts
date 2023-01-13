import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cyberstrat',
  templateUrl: './cyberstrat.component.html',
  styleUrls: ['./cyberstrat.component.css']
})
export class CyberstratComponent implements OnInit {
  colorWhite = false;

  date: number = 2021;
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'CyberStrat';
  styles: string = 'w-[100%] flex lg:justify-end'
  display: string = 'hidden'
  image: string = 'assets/img/primera-imgcyberstrat.png';
  imageTwo: string = 'assets/img/cyberstrat-logo.png';
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
