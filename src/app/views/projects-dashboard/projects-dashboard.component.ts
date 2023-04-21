import {Component, HostListener, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import * as AOS from 'aos';

@Component({
  selector: 'app-projects-dashboard',
  templateUrl: './projects-dashboard.component.html',
  styleUrls: ['./projects-dashboard.component.css']
})
export class ProjectsDashboardComponent implements OnInit {

  colorWhite = true;
  itemFocus!: any;

  showForm!: boolean;

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  getDownSection() {
    let x = document.querySelector("#nextContent");
    if (x){
        x.scrollIntoView({behavior: "smooth"});
    }
  }

  listGroup = [
    {types: 'todos', name: 'Todos', state: false},
    {types: 'banca', name: 'Banca', state: false},
    {types: 'educacion', name: 'Educación', state: false},
    {types: 'salud', name: 'Salud', state: false},
    {types: 'automotriz', name: 'Automotriz', state: false},
    {types: 'ecommerce', name: 'Ecommerce', state: false},
  ]

  clickListGroup = this.listGroup;

  // @HostListener("document:click")
  // clickToggle(){
  //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.header_variable = true;
  //   }else {
  //     this.header_variable = false;
  //   }
  // }

  // @HostListener('click')
  // clickInside() {
  //   this.clickListGroup.map(item => item.state = true)
  //   // this.wasInside = true;
  // }

  // @HostListener('document:click')
  // clickout() {
  //   this.clickListGroup.map(item => item.state = true)
  //   // if (!this.wasInside) {
  //   //   this.text = "clicked outside";
  //   // }
  //   // this.wasInside = false;
  // }


  bgColor: boolean = true;
  bgColorTwo: boolean = true;
  bgColorThree: boolean = true;
  bgColorFourth: boolean = true;
  bgColorFifth: boolean = true;
  bgColorSixth: boolean = true;
  bgColorSeventh: boolean = true;

  empresas = [
    {name: 'Primax', descripcion: 'Investigación y Consultoría - Descubrimiento de Producto - Diseño UX/UI - Design System', img: 'assets/img/phone-right.png', alt: 'Primax', tipo: 'automotriz', ruta: '/proyectos/primax', state: true, background: 'bg-color'},
    {name: 'Ripley', descripcion: 'Descubrimiento de Producto - Diseño UX/UI', img: 'assets/img/Ripley-slider.png', alt: 'Ripley', tipo: 'banca', ruta: '/proyectos/ripley', state: true, background: 'bg-two'},
    {name: 'Redeban', descripcion: 'Descubrimiento de Producto - Diseño UX/UI - Desarrollo de Software', img: 'assets/img/proyect-laptop.png', alt: 'Redeban', tipo: 'ecommerce', ruta: '/proyectos/redeban', state: true, background: 'bg-three'},
    {name: 'Informatica', descripcion: 'Descubrimiento de Producto - Diseño UX/UI - Desarrollo Web', img: 'assets/img/logo-mockup-informatica.png', alt: 'Informatiza', tipo: 'banca', ruta: '/proyectos/infomatica', state: true, background: 'bg-nine'},
    {name: 'Notifai', descripcion: 'Descubrimiento de Producto - Diseño UX/UI - Desarrollo de Software', img: 'assets/img/laptop-estadis.png', alt: 'Notifai', tipo: 'ecommerce', ruta: '/proyectos/notifai', state: true, background: 'bg-fourth'},
    {name: 'Caja Metropolitana', descripcion: 'Investigación y Consultoría - Descubrimiento de Producto - Diseño UX/UI - Desarrollo de Software - Desarrollo iOS Nativo - Desarrollo Android Nativo', img: 'assets/img/Caja Metropolitana.png', alt: 'CajaMetropolitana', tipo: 'ecommerce', ruta: '/proyectos/cajametropolitanadelima', state: true, background: 'bg-color'},
    {name: 'Niubiz', descripcion: 'Investigación y Consultoría - Descubrimiento de Producto - Diseño UX/UI', img: 'assets/img/logo-mockup-niubiz.png', alt: 'Nubiz', tipo: 'banca', ruta: '/proyectos/niubiz', state: true, background: 'bg-seventh'},
    {name: 'Caja Cusco', descripcion: 'Descubrimiento de Producto - Diseño UX/UI', img: 'assets/img/logo-mockup-cajacuzco.png', alt: 'CajaCusco', tipo: 'banca', ruta: '/proyectos/cajacuzco', state: true, background: 'bg-sixth'},
    {name: 'Primax Solutions', descripcion: 'Investigación y Consultoría - Descubrimiento de Producto - Diseño UX/UI', img: 'assets/img/logo-mockup-primax-blackoffice.png', alt: 'Primax Solutions', tipo: 'banca', ruta: '/proyectos/primax-blackoffice', state: true, background: 'bg-ten'},
    {name: 'Cyber Strat', descripcion: 'Investigación y Consultoría - Descubrimiento de Producto - Diseño UX/UI', img: 'assets/img/CyberStrat.png', alt: 'Cyber-Strat', tipo: 'banca', ruta: '/proyectos/cyberstrat', state: true, background: 'bg-eight'},
    {name: 'Próximamente', descripcion: 'Rebeca el chatbot de Ripley Perú rediseña su nueva propuesta de diseño conversacional y diseño UX/UI', img: 'assets/img/rebeca-img.svg', alt: 'Rebeca', tipo: 'banca', ruta: '/', state: true, background: 'bg-eleven'},
    {name: 'Próximamente', descripcion: 'Linkminers confía en nosotros para el rediseño UX/UI del nuevo sistema interactivo', img: 'assets/img/link-miners-img.svg', alt: 'Link-Miners', tipo: 'banca', ruta: '/', state: true, background: 'bg-twelve'},
  ]

  filtrado = this.empresas;

  public redirectInternas(ruta: string) {
    this.router.navigateByUrl(ruta);
  }

  filterEmpresas(value: string){
    if (value === 'todos'){
      this.filtrado = this.empresas
    }else {
      this.filtrado = this.empresas.filter(empresa => empresa.tipo === value);
      console.log(this.filtrado);
    }
  }

  header_variable=false;
  @HostListener("document:scroll")
  scrollFuntion(){
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
      this.header_variable = true;
    }else {
      this.header_variable = false;
    }
  }

  constructor(private router: Router) { }

  starproject_1 = true;
  starproject_2 = false;
  starproject_3 = false;
  starproject_4 = false;

  ngOnInit(): void {
    AOS.init()
  }

}
