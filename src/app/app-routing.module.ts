import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './views/contact/contact.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ProjectsComponent } from './views/projects/projects.component';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { DescripcionComponent } from './views/descripcion/descripcion.component';
import { ProjectsDashboardComponent } from './views/projects-dashboard/projects-dashboard.component';
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';
import { NotifaiComponent } from './views/notifai/notifai.component';
import { ServicesComponent } from './views/services/services.component';
import { TalentComponent } from './views/talent/talent.component';
import { RipleyComponent } from './views/ripley/ripley.component';
import { CookiesComponent } from './views/cookies/cookies.component';

const PROJECTS_METADATA = {
  seo: {
    title: 'Proyectos - Acompañamiento a Nuestros Clientes de Inicio a Fin  | Esedor',
    metaTags: [
      {
        name: 'description',
        content:
          'Esedor es una compañía que te acompaña en todas las etapas de tu proyecto maximizando tus objetivos de negocio | Esedor',
      },
      {
        property: 'og:title',
        content:
          'Proyectos - Acompañamiento a Nuestros Clientes de Inicio a Fin  | Esedor',
      },
      {
        proprety: 'og:description',
        content:
          'Esedor es una compañía que te acompaña en todas las etapas de tu proyecto maximizando tus objetivos de negocio | Esedor',
      },
      // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
      // { property: 'og:url', content: environment.appUrl + 'characters' },
      // { name: "twitter:card", content: "summary_large_image" },
    ],
  },
}

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      seo: {
        title: 'Desarrollo y Diseño UX/UI de Software a Medida | Esedor',
        metaTags: [
          {
            name: 'description',
            content:
              'Empresa especializada en diseño UX/UI y desarrollo de software a medida con +7 años de experiencia | Esedor',
          },
          {
            property: 'og:title',
            content: 'Desarrollo y Diseño UX/UI de Software a Medida | Esedor',
          },
          {
            proprety: 'og:description',
            content:
              'Empresa especializada en diseño UX/UI y desarrollo de software a medida con +7 años de experiencia | Esedor',
          },
          // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          // { property: 'og:url', content: environment.appUrl + 'characters' },
          // { name: "twitter:card", content: "summary_large_image" },
        ],
      },
    },
  },
  {
    path: 'contacto',
    component: ContactComponent,
    data: {
      seo: {
        title: 'Estima tu proyecto | Esedor',
        metaTags: [
          {
            name: 'description',
            content:
              'Permítenos ayudarte a cumplirlo con nuestras habilidades y servicios especializados | Esedor',
          },
          {
            property: 'og:title',
            content:
              'Estima tu proyecto | Esedor',
          },
          {
            proprety: 'og:description',
            content:
              'Permítenos ayudarte a cumplirlo con nuestras habilidades y servicios especializados | Esedor',
          },
          // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          // { property: 'og:url', content: environment.appUrl + 'characters' },
          // { name: "twitter:card", content: "summary_large_image" },
        ],
      },
    },
  },
  {
    path: 'nosotros',
    component: NosotrosComponent,
    data: {
      seo: {
        title: 'Nosotros - Nuestros Valores y Propósito Sostenibles | Esedor',
        metaTags: [
          {
            name: 'description',
            content:
              'Nosotros creamos productos digitales  y desarrollamos software a medida que permiten a las empresas impulsar sus negocios hacia la transformación digital | Esedor',
          },
          {
            property: 'og:title',
            content:
              'Nosotros - Nuestros Valores y Propósito Sostenibles | Esedor',
          },
          {
            proprety: 'og:description',
            content:
              'Nosotros creamos productos digitales  y desarrollamos software a medida que permiten a las empresas impulsar sus negocios hacia la transformación digital | Esedor',
          },
          // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          // { property: 'og:url', content: environment.appUrl + 'characters' },
          // { name: "twitter:card", content: "summary_large_image" },
        ],
      },
    },
  },
  { path: 'descripcion', component: DescripcionComponent },
  {
    path: 'proyectos',
    component: ProjectsDashboardComponent,
    data: PROJECTS_METADATA
  },
  { path: 'proyectos/primax', component: ProjectsComponent, data: PROJECTS_METADATA },
  { path: 'proyectos/notifai', component: NotifaiComponent, data: PROJECTS_METADATA },
  { path: 'proyectos/ripley', component: RipleyComponent, data: PROJECTS_METADATA },
  { path: 'proyectos/cookies', component: CookiesComponent, data: PROJECTS_METADATA },
  {
    path: 'servicios',
    component: ServicesComponent,
    data: {
      seo: {
        title: 'Servicios de Desarrollo de software, Diseño UX/UI, Design System, Investigación y Consoltoria | Esedor',
        metaTags: [
          {
            name: 'description',
            content:
              'Creamos productos digitales y proporcionamos desarrollo de software personalizado, servicios de diseño de UX/UI y migraciones a la nube | Esedor',
          },
          {
            property: 'og:title',
            content:
              'Servicios de Desarrollo de software, Diseño UX/UI, Design System, Investigación y Consoltoria | Esedor',
          },
          {
            proprety: 'og:description',
            content:
              'Creamos productos digitales y proporcionamos desarrollo de software personalizado, servicios de diseño de UX/UI y migraciones a la nube | Esedor',
          },
          // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          // { property: 'og:url', content: environment.appUrl + 'characters' },
          // { name: "twitter:card", content: "summary_large_image" },
        ],
      },
    },
  },
  {
    path: 'talento',
    component: TalentComponent,
    data: {
      seo: {
        title: 'Talento - Aplica a Esedor  | Esedor',
        metaTags: [
          {
            name: 'description',
            content:
              'Aplicar a Esedor es dar un salto en tu carrera y nuestros valores definen el propósito de crear talento tech| Esedor',
          },
          {
            property: 'og:title',
            content:
              'Talento - Aplica a Esedor  | Esedor',
          },
          {
            proprety: 'og:description',
            content:
              'Aplicar a Esedor es dar un salto en tu carrera y nuestros valores definen el propósito de crear talento tech| Esedor',
          },
          // { property: 'og:image', content: environment.appUrl + 'assets/image/characters.png' },
          // { property: 'og:url', content: environment.appUrl + 'characters' },
          // { name: "twitter:card", content: "summary_large_image" },
        ],
      },
    },
  },
  // { path: 'descripcion', component: DescripcionComponent},
  { path: 'notifai-vista1', component: NotifaiVista1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppRoutingModule {}
