import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cajacuzco',
  templateUrl: './cajacuzco.component.html',
  styleUrls: ['./cajacuzco.component.css']
})
export class CajacuzcoComponent implements OnInit {



    colorWhite = false;
    showForm!: boolean;

    showFormEvent() {
      this.showForm = true;
    }

    closeFormEvent() {
      this.showForm = false;
    }
  constructor() { }

  date: number = 2021;
  industry: string = 'BANCA Y FINANZAS';
  client: string = 'Caja Cuzco';
  styles: string = 'w-[100%] flex justify-end'
  display: string = 'hidden';
  image: string = 'assets/img/cajacuzco.jpg';
  paragraphOne: string = 'Caja Cusco es una de las financieras municipales más importantes a nivel nacional, con una red de 105 agencias en 13 regiones del país. Uno de los principales retos fue migrar a la nube su sistema interactivo, optimizar el rendimiento y reducir el tiempo de evaluación de los usuarios.';
  paragraphTwo: string = 'Iniciamos evaluando los requerimientos del sistema y las necesidades de los usuarios, definiendo una experiencia de usuario (UX) enfocada en mejorar las características del sistema actual, investigamos las funcionalidades ya implementadas para definir una nueva generación de componentes modernos UI que les permitiera llevar la experiencia al siguiente nivel, logrando así reducir el tiempo de una evaluación crediticia en un 30% y un otorgándole un sistema intuitivo para los nuevos colaboradores.';
  imageTwo: string = 'assets/img/cajacuzcologo.png';

  serviceList: Array<String> = [
    'Descubrimiento de producto',
    'Diseño de producto',
    'Desarrollo de software',
  ];

  definitionsList: Array<String> = [
    'UX Board',
    'User Flow',
    'Wireframe',
    'Diseño UI',
    'Desarrollo Front-End',
  ]



  animatedTitle: Array<{aos: number, label: String}> = [

    {aos: 1000, label: 'Data Driven'},
    {aos: 1000, label: 'y producto'},
    {aos: 1000, label: 'digital'},
  ]

  firstText: string = 'Sistema Backoffice';
  secondText: string = 'Cuándo iniciamos el proyecto nos enfrentamos a un sistema previo desarrollado por el equipo de ingenieros, con la ayuda del equipo de analistas funcionales documentamos las historias de usuario de todo el sistema e implementamos un sistema interactivo con funcionalidades mejoradas para las siguientes problemas:';
  thirdText: string = ''
  optionImg: string = '2xl:mt-[140px]'
  optionOne: string ='Resolución de reclamos';
  optionTwo: string ='Consultas';
  optionThree: string ='Cancelación de tarjetas';
  optionFour: string ='Bloqueo de tarjetas';
  optionFive: string ='Reprogramación de deudas';
  displayImage:string = 'hidden'
  ngOnInit(): void {
  }

}
