import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { ContactComponent } from "./views/contact/contact.component";
import { NosotrosComponent } from "./views/nosotros/nosotros.component";
import { ProjectsComponent } from "./views/projects/projects.component";
import {AppComponent} from "./app.component";
import { IndexComponent } from "./views/index/index.component";
import { DescripcionComponent } from './views/descripcion/descripcion.component';
import { ProjectsDashboardComponent } from "./views/projects-dashboard/projects-dashboard.component";
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';
import { NotifaiComponent } from './views/notifai/notifai.component';
import { ServicesComponent } from './views/services/services.component';
import { TalentComponent } from './views/talent/talent.component';
import { RipleyComponent } from './views/ripley/ripley.component';
import { CookiesComponent } from './views/cookies/cookies.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'proyectos/primax', component: ProjectsComponent },
  { path: 'descripcion', component: DescripcionComponent},
  { path: 'proyectos', component: ProjectsDashboardComponent},
  { path: 'servicios', component: ServicesComponent},
  { path: 'talento', component:TalentComponent },
  // { path: 'descripcion', component: DescripcionComponent},
  { path: 'notifai-vista1', component: NotifaiVista1Component},
  { path: 'proyectos/notifai', component: NotifaiComponent},
  { path: 'proyectos/ripley', component: RipleyComponent},
  { path: 'proyectos/cookies', component: CookiesComponent},
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
