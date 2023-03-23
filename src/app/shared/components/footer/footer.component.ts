import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  servicesList = [
    {text: 'Descubrimiento de Producto', route: '/servicios'},
    {text: 'Diseño de Productos', route: '/servicios'},
    {text: 'Desarrollo de software', route: '/servicios'},
    {text: 'Sistemas de Diseños', route: '/servicios'},
    {text: 'Investigación y Consultoría ', route: '/servicios'},
    {text: 'Transformación cultural', route: '/servicios'}
  ]

  serviceRoute(route: any) {
    this.router.navigateByUrl(route);
  }

  colorWhite = true;

  usList = [
    {text: 'Nuestra Cultura', route: ''},
    {text: 'Cómo lo Hacemos', route: ''},
    {text: 'Equipo', route: ''},
    {text: 'Visión Responsable', route: ''}
  ]

  listGroup = [
    {text: 'Proyectos', route: '/proyectos'},
    {text: 'Blog', route: '/'},
    {text: 'Contacto', route: '/contacto'},
    {text: 'Talento', route: '/talento'},
    {text: 'Level Up', route: '/level-up'}
  ]



  routesEvent(route: any) {
    this.router.navigateByUrl(route);
  }

  politicsEvent() {
    this.router.navigateByUrl('/proyectos/cookies');
  }

}
