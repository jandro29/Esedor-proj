import { Component, OnInit, HostListener, ViewChild, ErrorHandler, EventEmitter, Output } from '@angular/core';
import { InitialNavigation, UrlSerializer, UrlTree } from '@angular/router';

import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

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

  navbarfixed:boolean = false;
  btnStyle!: boolean;

  @Output() letsForm = new EventEmitter<any>();
  @ViewChild('.mat-tab-header') headerTab: any;

  @HostListener('window:scroll',['$event']) onscroll(){
    if(window.scrollY > 1370)
    {
      this.headerTab = '.fixed';
    }
    else
    {
      this.headerTab = '.nofixed';
    }
  }



  colorWhite = true;
  bgTab: boolean = true;
  bgTab2!: boolean;

  test(a: any){
    if(a.index == 0) {
      this.bgTab = true;
      this.bgTab2 = false;

    } else if (a.index == 1 ) {
      this.bgTab2 = true;
      this.bgTab = false;
    }
    console.log(a.index)
  }

  showForm!: boolean;



  constructor() { }

  ngOnInit(): void {
    AOS.init()
    console.log(this.headerTab = 'hola')
  }

  labelGroup = [
    {label: 'Chatbot & Voicebot'},
    {label: 'Descubrimiento de productos'},
    {label: 'Diseño de UX/UI'},
    {label: 'Desarrollo de software'},
    {label: 'Design Systems'},
    {label: 'Investigación y consultoría digital'}
  ]

  firstTab = [
    {title: 'Consultoría en IA', text: 'Entender las necesidades y objetivos de la empresa cliente, y proponer soluciones de automatización conversacional que se adapten a sus requerimientos.', img: 'assets/img/users.png'},
    {title: 'Diseño conversacional', text: 'Definir el flujo de conversación del chatbot o voicebot, incluyendo los posibles escenarios de conversación y respuestas a preguntas comunes.', img: 'assets/img/products.png'},
    {title: 'Desarrollo a medida', text: 'Crear el chatbot o voicebot utilizando plataformas y herramientas especializadas, que permiten integrar la inteligencia artificial y el procesamiento del lenguaje natural.', img: 'assets/img/prototypes.png'},
    {title: 'Pruebas UX y optimización', text: 'Probar y depurar el chatbot o voice bot, para asegurarse de que funciona correctamente y proporciona respuestas precisas y útiles a los usuarios. Además, se puede optimizar la experiencia de usuario, mejorando la calidad de las respuestas y haciendo que la interacción sea más natural y satisfactoria.', img: 'assets/img/scope.png'},
    {title: 'Implementación', text: 'Introducir el chatbot o voicebot en la infraestructura de la empresa, integrándose con los canales de comunicación necesarios y asegurándose de que los usuarios puedan acceder a él de manera sencilla.', img: 'assets/img/design.png'},
    {title: 'Análisis y soporte', text: 'soporte técnico continuo para ayudarte a mantener y mejorar tu solución de automatización conversacional, y te proporcionamos informes y análisis detallados para que puedas medir el éxito de tu chatbot o voicebot.', img: 'assets/img/architecture.png'},

  ]

  secondTab = [
    {title: 'Comportamiento de usuarios', text: 'Sustrae información detallada sobre los intereses y necesidades de sus clientes analizando sus comportamientos.', img: 'assets/img/users.png'},
    {title: 'Sprint de diseño', text: 'Un taller de cinco días para responder preguntas comerciales cruciales, planificar las características esenciales de su producto y reducir el riesgo de lanzar un producto al mercado.', img: 'assets/img/products.png'},
    {title: 'Creación rápida de prototipos', text: 'Valida tus ideas con prototipos que te permitan explorar y validar rápidamente tus objetivos de producto. para reducir el riesgo de fallas.', img: 'assets/img/prototypes.png'},
    {title: 'Sesión de alcance', text: 'Destina a dar forma a tu idea de negocio, respondiendo dudas sobre planificación de proyectos, estimación de tiempos y presupuestos.', img: 'assets/img/scope.png'},
    {title: 'Diseño UI', text: 'Aporta al usuario un valor diferencial a través de un producto bien diseñado y estético.', img: 'assets/img/design.png'},
    {title: 'Arquitectura de información', text: 'Cree una navegación intuitiva basada en los modelos mentales de tu usuario con una arquitectura de información eficaz.', img: 'assets/img/architecture.png'},
    {title: 'Usabilidad y accesibilidad', text: 'Brinda una experiencia amigable que le permita tener el control a tu cliente dentro del producto digital', img: 'assets/img/usability.png'},
  ]

  thirdTab = [
    {title: 'Diseño de experiencia de usuario (UX)', text: 'Creamos diseños de UX personalizados que te ayudan a crear una experiencia de usuario excepcional.', img: 'assets/img/users.png', style: ''},
    {title: 'Diseño de productos móviles', text: 'Diseñamos aplicaciones móviles personalizadas que brindan una experiencia de usuario móvil perfecta y satisfactoria.', img: 'assets/img/products.png', style: ''},
    {title: 'Valida tus ideas', text: 'Crea prototipos MVP y valida rápidamente diferentes opciones para reducir el riesgo de fallas.', img: 'assets/img/prototypes.png', style: ''},
    {title: 'Diseño de productos web', text: 'Creamos diseños de productos web personalizados que se adaptan a tus necesidades específicas y te ayudan a crear una experiencia de usuario atractiva y satisfactoria.', img: 'assets/img/scope.png', style: ''},
    {title: 'Investigación de usuario', text: 'Realizamos investigaciones del comportamiento del usuario para entender mejor las necesidades y deseos de tus usuarios.', img: 'assets/img/design.png', style: 'lg:col-start-2'},
    {title: 'Construye productos responsivos', text: 'Define experiencias adaptables y táctiles para móviles construidas en torno a las necesidades de los usuarios.', img: 'assets/img/architecture.png', style: ''},
    {title: 'Vende creando contenido relevante', text: 'Proporcione a los usuarios la información correcta en el momento adecuado y en el lugar adecuado gracias a la redacción UX inteligente.', img: 'assets/img/usability.png', style: ''},
    {title: 'Organiza la estructura del sitio web', text: 'Cree una navegación intuitiva basada en los modelos mentales de tu usuario con una arquitectura de información eficaz.', img: 'assets/img/accessibility.png', style: 'lg:col-start-2'},
    {title: 'Crear productos utilizables', text: 'Haga que las interacciones digitales sean fluidas y garantice un acceso sencillo e intuitivo al contenido que sus usuarios deseen.', img: 'assets/img/prototypes.png', style: ''},
  ]

  fourthTab = [
    {title: 'Desarrollo de aplicaciones web', text: 'Creamos aplicaciones web personalizadas y escalables que se adaptan a tus necesidades específicas y son fáciles de usar y mantener.', img: 'assets/img/users.png'},
    {title: 'Desarrollo de aplicaciones móviles', text: 'Diseñamos y desarrollamos aplicaciones móviles personalizadas para iOS y Android que brindan una experiencia de usuario móvil perfecta y satisfactoria.', img: 'assets/img/products.png'},
    {title: 'Desarrollo de sistemas de gestión de bases de datos', text: 'Creamos sistemas de gestión de bases de datos personalizados que te permiten almacenar, gestionar y analizar grandes volúmenes de datos de manera efectiva y eficiente.', img: 'assets/img/prototypes.png'},
    {title: 'Desarrollo de soluciones de inteligencia artificial', text: 'Ofrecemos soluciones de inteligencia artificial personalizadas que utilizan tecnologías de aprendizaje automático y procesamiento de lenguaje natural para ayudarte a automatizar tareas repetitivas, mejorar la eficiencia y la precisión de tus operaciones, y mejorar la experiencia del usuario.', img: 'assets/img/scope.png'},
    {title: 'Desarrollo de soluciones de comercio electrónico', text: 'Creamos soluciones de comercio electrónico personalizadas que te permiten vender tus productos y servicios en línea de manera efectiva.', img: 'assets/img/design.png'},
    {title: 'Desarrollo de sistemas de gestión empresarial', text: 'Creamos sistemas de gestión empresarial personalizados que te permiten optimizar tus procesos empresariales y mejorar la eficiencia y la productividad de tu equipo.', img: 'assets/img/architecture.png'},
  ]

  fifthTab = [
    {title: 'Auditoría UX/UI', text: 'Explorar las áreas que se pueden mejorar de una producción, revelando que partes del lugar o la aplicación causan dolores de cabeza para los usuarios y afectan tus tasas de evolución.', img: 'assets/img/users.png'},
    {title: 'IU/biblioteca de patrones', text: 'Reconoce y prioriza los factores en colaboración con su equipo. Para extraer el máximo valor del sistema de diseño, asegúrese de que los factores sean altamente reutilizables en muchas situaciones.', img: 'assets/img/products.png'},
    {title: 'Diseño de Design Systems', text: 'Creamos Design Systems personalizados que se adaptan a tus necesidades específicas y te ayudan a mantener la coherencia en todas las plataformas.', img: 'assets/img/prototypes.png'},
    {title: 'Implementación de Design Systems', text: 'Implementamos Design Systems en tus plataformas existentes para mejorar la coherencia en la experiencia de usuario.', img: 'assets/img/scope.png'},
    {title: 'Mantenimiento de Design Systems', text: 'Proporcionamos servicios de mantenimiento continuo para asegurarnos de que tus Design Systems siempre estén actualizados y funcionando correctamente.', img: 'assets/img/design.png'},
    {title: 'Entrenamiento en Design Systems', text: 'Proporcionamos entrenamiento en Design Systems para tus equipos de diseño y desarrollo para que puedan mantener la coherencia en tus productos digitales en todas las plataformas.', img: 'assets/img/architecture.png'},
    {title: 'Reducir la carga en el equipo', text: 'Tener una documentación extensa, además de componentes y código reutilizables en el sistema de diseño, permite a los diseñadores y desarrolladores concentrarse en lo que agrega valor.', img: 'assets/img/usability.png'},
  ]

  sixthTab = [
    {title: 'Mejorar la conversión', text: 'Aumente con éxito el número de clientes potenciales y ventas de su sitio web.', img: 'assets/img/users.png'},
    {title: 'Optimizar la experiencia del usuario', text: 'Descubre cuellos de botella en el recorrido del usuario y corríjalos.', img: 'assets/img/products.png'},
    {title: 'Vender con contenido relevante', text: 'Proporcione a los usuarios la información correcta en el momento adecuado y en el lugar adecuado.', img: 'assets/img/prototypes.png'},
    {title: 'Refinar la estructura de su sitio web', text: 'Cree una navegación intuitiva y fácil de usar con una arquitectura de información eficaz.', img: 'assets/img/scope.png'},
    {title: 'Reducir los costes', text: 'Identificar errores de experiencia de usuario al principio del proceso de diseño para evitar costos de rediseño.', img: 'assets/img/design.png'},
    {title: 'Descubra soluciones', text: 'Identifique desafíos, valide la viabilidad y desarrolle soluciones innovadoras', img: 'assets/img/architecture.png'},
    {title: 'Aumentar la productividad', text: 'Construya sistemas de diseño para crear nuevos activos visuales en un abrir y cerrar de ojos.', img: 'assets/img/usability.png'},
    {title: 'Diseñar aplicaciones web y móviles', text: 'Cree una UX perfecta y una interfaz de usuario hermosa para diferentes plataformas y dispositivos.', img: 'assets/img/accessibility.png'},

  ]



}
