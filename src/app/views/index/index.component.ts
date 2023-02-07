import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from "@angular/router";
// import { ViewportScroller } from "@angular/common";
// import { Draggable } from 'gsap/Draggable';
import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { DOCUMENT } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CookiesBarComponent } from 'src/app/shared/components/cookies-bar/cookies-bar.component';

import * as AOS from 'aos';
import { Title } from '@angular/platform-browser';

// gsap.registerPlugin(ScrollTrigger, Draggable);

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit, OnInit {

  value = '';

  copy(value: any) {
    return `${value}\n\ntalento@esedor.com`;
  }
  // @ViewChild('nextContent', { static: true }) nextContent!: ElementRef<HTMLDivElement>;
  // @ViewChild('title', { static: true }) title!: ElementRef<HTMLDivElement>;
  @ViewChild('slideContent', {static: true}) slideContent!: ElementRef<HTMLDivElement>;

  // @ViewChild('textoDinamico', {static: true}) textoDinamico!: ElementRef<HTMLDivElement>;
  showVideo!: boolean;
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

  bgBlog!: boolean;
  bgBlogTwo!: boolean;
  bgBlogThree!: boolean;

  arrowRotate!: boolean;
  displayElement: boolean = true;

  servicesItems = [
    {imgwhite:'assets/img/imgmobilindex/img-white/findproductwhite.png',        img:'assets/img/imgmobilindex/descubrimientodeproductosmobil.jpg',    title: 'Descubrimiento de producto', text: 'Planifique y evalúe las características esenciales de su producto para lograr sus objetivos comerciales y eliminar posibles errores.', state: false, length: '2xl:w-auto', route: '/servicios'},
    {imgwhite:'assets/img/imgmobilindex/img-white/designproductwhite.png',      img:'assets/img/imgmobilindex/disenhodeproductosmobil.jpg',           title: 'Diseño de Productos', text: 'Crea experiencias de usuario para sus productos digitales. Resuelva problemas reales y mejore sus métricas comerciales a través de interfaces estéticas.', state: false, length: '2xl:w-[75%]', route: '/servicios'},
    {imgwhite:'assets/img/imgmobilindex/img-white/developingsoftwarewhite.png', img: 'assets/img/imgmobilindex/desarrollodesoftwaremobil.jpg',        title: 'Desarrollo de software', text: 'Implemente interfaces de usuario a medida y receptivas que sean altamente interactivas y brinden a los usuarios una experiencia similar a la nativa.', state: false, length: '2xl:w-[75%]', route: '/servicios'},
    {imgwhite:'assets/img/imgmobilindex/img-white/systemsdesingwhite.png',      img: 'assets/img/imgmobilindex/sitemasdedisenhomobil.jpg',            title: 'Sistemas de diseño', text: 'Democratiza el diseño y desarrollo, para una experiencia de usuario superior y una mayor eficiencia en el tiempo de creación de tus productos digitales.', state: false, length: 'xl:w-[72%]', route: '/servicios'},
    {imgwhite:'assets/img/imgmobilindex/img-white/researchwhite.png',           img: 'assets/img/imgmobilindex/investigacionyconsultariadigital.jpg', title: 'Investigación y consultoría digital', text: 'Tome las decisiones correctas y realice investigación en sus usuarios. Entiende su comportamiento y decodifica sus intereses.', state: false, length: '2xl:w-auto', route: '/servicios'},
    {imgwhite:'assets/img/imgmobilindex/img-white/transformationwhite.png',     img: 'assets/img/imgmobilindex/transformacioncultural.jpg',           title: 'Transformación Cultural', text: 'Adaptamos tu negocio al mundo digital desde una estrategia centrada en la experiencia de usuario que optimice el crecimiento de su negocio', state: false, length: '2xl:w-[75%]', route: '/servicios'},
  ]

  serviceRoute(route: any) {
    this.router.navigateByUrl(route);
  }

  // baseTimeline = gsap.timeline({ paused: true });

  // animation = gsap
  //   .timeline({ repeat: -1, paused: true })
  //   .add(this.baseTimeline.tweenFromTo(1, 2, { immediateRender: true }));

  // slides: any;
  // scrubber: any;
  // handle: any;

  // slideCount: any;

  // boxWidth: any;
  // targetX = 0;
  // lastTarget = 0;
  // draggable: any;

  // ratio: any;
  // ratioX: any;

  colorWhite = false;

  // quote_variable=false;

  // changeCounter = 0;
  // actualprimero!: string;
  // actualsegundo!: string;

  constructor(private title: Title, private router: Router, public _snackBar: MatSnackBar) { }




  ngOnInit(): void {
    AOS.init()
    // this.title.setTitle("Desarrollo y Diseño UX/UI de Software a Medida | Esedor");

    // this._snackBar.openFromComponent(CookiesBarComponent, {
    //   horizontalPosition: 'center',
    //   verticalPosition: 'bottom',
    //   panelClass: ['custom-snack'],
    // });
  }

  public redirectProject() {
    this.router.navigateByUrl('/proyectos');
  }

  // scrollFuntion(){
  //   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 2000){
  //     this.quote_variable = true;
  //   }else {
  //     this.quote_variable = false;
  //   }
  // }

  ngAfterViewInit(): void {

    this._snackBar.openFromComponent(CookiesBarComponent, {
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['custom-snack'],
    });

    // var tl = gsap.timeline({});

    // tl.from(".quote",1.5,{duration: 0.8,
    //   opacity: 0,
    //   scale: 0,
    //   y: 80,
    //   rotationX: 180,
    //   transformOrigin: "0% 50% -50",
    //   ease: "back",
    //   stagger: 0.01})

    // var tl = gsap.timeline({});

    // tl.from(".hidentext", 1.5, {y:"100%", ease:Power4.easeOut},0.15)

    // gsap.registerPlugin(Draggable);
    // this.actualprimero = this.titulos[0].title1;
    // this.actualsegundo = this.titulos[0].title2;
    // setInterval(() => {
    //   this.changeCounter++;
    //   if (this.changeCounter > this.titulos.length -1) {
    //     this.changeCounter = 0;
    //   }
    //   this.actualprimero = this.titulos[this.changeCounter].title1;
    //   this.actualsegundo = this.titulos[this.changeCounter].title2;
    // }, 5000);

    gsap.from(this.slideContent.nativeElement.childNodes, {
      delay: 0.6,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });


  }

}
