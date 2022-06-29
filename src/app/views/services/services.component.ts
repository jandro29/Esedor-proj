import { Component, OnInit, HostListener, ViewChild } from '@angular/core';

import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  navbarfixed:boolean = false;

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

  showFormEvent() {
    this.showForm = true;
  }

  closeFormEvent() {
    this.showForm = false;
  }

  constructor() { }

  ngOnInit(): void {
    AOS.init()
    console.log(this.headerTab = 'hola')
  }

  labelGroup = [
    {label: 'Descubrimiento de Producto'},
    {label: 'Diseño UX/UI'},
    {label: 'Desarrollo de Software'},
    {label: 'Sistemas de Diseño'},
    {label: 'Investigación y Consultoría'},
    {label: 'Transformación Cultural'}
  ]

  firstTab = [
    {title: 'Comportamiento de usuarios', text: 'Sustrae información detallada sobre los intereses y necesidades de sus clientes analizando sus comportamientos.', img: 'assets/img/users.png'},
    {title: 'Sprint de diseño de producto', text: 'Un taller de cinco días para responder preguntas comerciales cruciales, planificar las características esenciales de su producto y reducir el riesgo de lanzar un producto al mercado.', img: 'assets/img/products.png'},
    {title: 'Creación rápida de prototipos', text: 'Valida tus ideas con prototipos que te permitan explorar y validar rápidamente tus objetivos de producto. para reducir el riesgo de fallas.', img: 'assets/img/prototypes.png'},
    {title: 'Sesión de alcance', text: 'Destina a dar forma a tu idea de negocio, respondiendo dudas sobre planificación de proyectos, estimación de tiempos y presupuestos.', img: 'assets/img/scope.png'},
    {title: 'Diseño visual', text: 'Aporta al usuario un valor diferencial a través de un producto bien diseñado y estético', img: 'assets/img/design.png'},
    {title: 'Arquitectura de informacion', text: 'Cree una navegación intuitiva basada en los modelos mentales de tu usuario con una arquitectura de información eficaz.', img: 'assets/img/architecture.png'},
    {title: 'Usabilidad y accesibilidad', text: ' Brinda una experiencia amigable que le permita tener el control a tu cliente dentro del producto digital', img: 'assets/img/usability.png'},

  ]

  secondTab = [
    {title: 'Diseño de sistemas web y móviles', text: 'Crea un UX perfecto para diferentes plataformas y dispositivos que se adapten a los requerimientos del sistema.', img: 'assets/img/users.png'},
    {title: 'Entiende a tus usuarios', text: 'Asegúrese de que las soluciones se centran en el cliente con la investigación y el análisis del comportamiento de los usuarios.', img: 'assets/img/products.png'},
    {title: 'Valida tus ideas', text: 'Crea prototipos y valida rápidamente diferentes opciones para reducir el riesgo de fallas.', img: 'assets/img/prototypes.png'},
    {title: 'Mejora la experiencia del cliente', text: 'Utilice el mapa de recorrido del cliente para entender problemas y patrones que le otorguen nuevas oportunidades de mejora.', img: 'assets/img/scope.png'},
    {title: 'Construye productos responsivos', text: 'Define experiencias adaptables y táctiles para móviles construidas en torno a las necesidades de los usuarios.', img: 'assets/img/design.png'},
    {title: 'Vende creando contenido relevante', text: 'Proporcione a los usuarios la información correcta en el momento adecuado y en el lugar adecuado gracias a la redacción UX inteligente.', img: 'assets/img/architecture.png'},
    {title: 'Organiza la estructura del sitio web', text: 'Cree una navegación intuitiva basada en los modelos mentales de tu usuario con una arquitectura de información eficaz.', img: 'assets/img/usability.png'},
    {title: 'Branding', text: 'Defina sus diferenciadores de marca y cree confianza entre su mercado objetivo con diseños confiables y consistentes.', img: 'assets/img/accessibility.png'}
  ]

  thirdTab = [
    {title: 'Angular', text: 'Implementa framework para aplicaciones web desarrollado en TypeScript y mantener aplicaciones web de una sola página.', img: 'assets/img/users.png', style: ''},
    {title: 'React', text: 'Crea interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.', img: 'assets/img/products.png', style: ''},
    {title: 'Vue', text: 'Usa el framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página.', img: 'assets/img/prototypes.png', style: ''},
    {title: 'Node.js', text: 'Implementa aplicaciones web de alto rentabilidad basadas en Javascript, un lenguaje para el desarrollo completo.', img: 'assets/img/scope.png', style: ''},
    {title: 'Java', text: 'El diseño de aplicaciones web rápidas y escalables requiere una combinación de la arquitectura de desarrollo adecuada y un equipo experto.', img: 'assets/img/design.png', style: 'lg:col-start-2'},
    {title: 'React Native', text: 'Escriba el código una vez e impleméntelo tanto en Android como en iOS para llegar a toda su audiencia al mismo tiempo.', img: 'assets/img/architecture.png', style: ''},
    {title: 'iOS', text: 'Evoluciona aplicaciones iOS de alta calidad con tecnología de punta y acelere los resultados comerciales con el desarrollo de aplicaciones para iOS.', img: 'assets/img/usability.png', style: ''},
    {title: 'Kotlin', text: 'Innovación de aplicaciones móviles atractivas y escalables con la máxima rentabilidad utilizando los lenguajes de programación Java y Kotlin.', img: 'assets/img/accessibility.png', style: 'lg:col-start-2'},
    {title: 'Flutter', text: 'Traslada su idea a la siguiente etapa e incremente la comercialización de su producto con el desarrollo de Flutter.', img: 'assets/img/prototypes.png', style: ''},
  ]

  fourthTab = [
    {title: 'Auditoría UX/UI', text: 'Explorar las áreas que se pueden mejorar de una producción, revelando que partes del lugar o la aplicación causan dolores de cabeza para los usuarios y afectan tus tasas de evolución.', img: 'assets/img/users.png'},
    {title: 'IU/biblioteca de patrones', text: 'Reconoce y prioriza los factores en colaboración con su equipo. Para extraer el máximo valor del sistema de diseño, asegúrese de que los factores sean altamente reutilizables en muchas situaciones.', img: 'assets/img/products.png'},
    {title: 'In house o agencia', text: 'La creación de un sistema de diseño puede ser una tarea enorme que solicita la participación de muchas personas en sus equipos de productos.', img: 'assets/img/prototypes.png'},
    {title: 'Aprobación de las partes interesadas', text: 'El procedimiento tendrá un gran impacto en la forma en que trabajan los diseñadores y desarrolladores, por lo que es importante una fuerte comunicación bidireccionaL.', img: 'assets/img/scope.png'},
    {title: 'Sesiones de equipo', text: 'Es posible que desee incluir personas de otras disciplinas, como gerentes de productos, líderes en la organización, investigadores y estrategas de contenido.', img: 'assets/img/design.png'},
    {title: 'Reduce el mantenimiento', text: 'Los sistemas de diseño no solo ayudan a prevenir errores, sino que también muestran qué hacer en caso de que se produzca un error, ya sea menor o colosal.', img: 'assets/img/architecture.png'},
    {title: 'Ahorre tiempo y dinero', text: 'Los equipos pueden reutilizar de manera efectiva las piezas existentes en lugar de crearlas desde cero.', img: 'assets/img/usability.png'},
    {title: 'Reducir la carga en el equipo', text: 'Tener una documentación extensa, además de componentes y código reutilizables en el sistema de diseño, permite a los diseñadores y desarrolladores concentrarse en lo que agrega valor.', img: 'assets/img/accessibility.png'},
  ]

  fifthTab = [
    {title: 'Desafíos de investigación', text: 'Comprender las posibles objeciones y crear una estrategia de I+D en consecuencia', img: 'assets/img/users.png'},
    {title: 'Descubra soluciones', text: 'Identifique desafíos, valide la viabilidad y desarrolle soluciones innovadoras', img: 'assets/img/products.png'},
    {title: 'Refinar la estructura de su sitio web', text: 'Utilizar la experiencia del cliente para descubrir problemas y posibles soluciones.', img: 'assets/img/prototypes.png'},
    {title: 'Comprensión de los usuarios', text: 'Aprende escuchar, confiar y construir relaciones significativas con los usuarios.', img: 'assets/img/scope.png'},
    {title: 'Gestión de proyectos', text: 'Nuestros profesionales de gestión de proyectos de clase mundial se asegurarán de que su idea única se traduzca en un plan de acción técnico.', img: 'assets/img/design.png'},
    {title: 'Investigación de productos', text: 'Profundice en el comportamiento de los usuarios, el entorno comercial y el producto para recopilar los datos necesarios para establecer los próximos pasos para su negocio', img: 'assets/img/architecture.png'},
    {title: 'Descubrimiento', text: 'Colaborar con el equipo de diseño para aumentar la productividad, impulsar las ganancias, mejorar la imagen pública o cambios en los procesos internos o externos.', img: 'assets/img/usability.png'},
  ]

  sixthTab = [
    {title: 'Aumento de personal', text: 'Perfiles especializados, para trabajar de manera permanente en su empresa', img: 'assets/img/users.png'},
    {title: 'Equipos ágiles', text: 'Haz que tus proyectos se ejecuten bajo un manifiesto simple y veloz.', img: 'assets/img/products.png'},
    {title: 'Creación rápida de prototipos', text: 'Extrae información detallada sobre las necesidades de sus clientes.', img: 'assets/img/prototypes.png'},
    {title: 'Talleres de Co-creación', text: 'Un taller destinado a dar forma a tu idea de negocio, respondiendo dudas sobre planificación de proyectos, estimación de tiempos y presupuestos.', img: 'assets/img/scope.png'},
  ]


}
