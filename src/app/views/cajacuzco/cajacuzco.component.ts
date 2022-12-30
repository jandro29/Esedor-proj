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
  industry: string = 'INTELIGENCIA ARTIFICIAL';
  client: string = 'Caja Cuzco';
  styles: string = 'w-[100%] '
  display: string = 'hidden';
  image: string = 'assets/img/cajacuzco.jpg';
  paragraphOne: string = 'Caja Cusco y el reto Es una de las financieras municipales más importantes a nivel nacional, con una red de 105 agencias en 13 regiones del país, uno de los principales problemas era el tiempo de evaluación de los clientes que buscaban acceder a una tarjeta de crédito.';
  paragraphTwo: string = 'El trabajo de Esedor Evaluamos los requerimientos del sistema y las necesidades del usuario, definiendo un producto digital que los ayude a reducir la carga en la ejecución de las tareas más recurrentes en la evaluación de los créditos de los clientes.';
  imageTwo: string = 'assets/img/cajacuzcologo.png';

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

  firstText: string = 'Sistema Backoffice';
  secondText: string = 'Definimos un backoffice que le permitiera gestionar todos los procesos como resolución de reclamos, consultas, cancelación de tarjetas, bloqueo de tarjetas, reprogramación de deudas, entre otros requerimientos.';
  displayImage:string = 'hidden'
  ngOnInit(): void {
  }

}
