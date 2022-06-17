import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-services-tab',
  templateUrl: './services-tab.component.html',
  styleUrls: ['./services-tab.component.css']
})
export class ServicesTabComponent implements OnInit {

  btnStyle!: boolean;

  @Output() letsForm = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  paragraphGroup = [
    {text: 'Delivery Manager', secondText: 'Deje que nuestros expertos supervisen su proyecto.'},
    {text: 'Aumento de personal', secondText: 'Perfiles especializados, para trabajar de manera permanente en su empresa'},
    {text: 'Equipos Ágiles', secondText: 'Haz que tus proyectos se ejecuten bajo un manifiesto ágil, simple y rápido.'},
    {text: 'De principio a fin', secondText: 'Lideramos su proyecto hasta culminar todos los hitos de progreso asignados.'},
  ]

}
