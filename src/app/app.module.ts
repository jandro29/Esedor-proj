import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DragScrollModule } from "ngx-drag-scroll";
import { MatListModule } from '@angular/material/list';
import { NguCarouselModule } from '@ngu/carousel';
import { MatTabsModule } from '@angular/material/tabs';
import { MatRippleModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectsComponent } from './views/projects/projects.component';
import { NosotrosComponent } from './views/nosotros/nosotros.component';
import { ContactComponent } from './views/contact/contact.component';

import { IndexComponent } from './views/index/index.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { ProjectsDashboardComponent } from './views/projects-dashboard/projects-dashboard.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { NotifaiVista1Component } from './views/notifai-vista1/notifai-vista1.component';
import { DescripcionComponent } from './views/descripcion/descripcion.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProjectsSlideComponent } from './shared/components/projects-slide/projects-slide.component';
import { MainSliderComponent } from './shared/components/main-slider/main-slider.component';
import { FirstSectionComponent } from './shared/components/project-internals/first-section/first-section.component';
import { NotifaiComponent } from './views/notifai/notifai.component';
import { SecondSectionComponent } from './shared/components/project-internals/second-section/second-section.component';
import { ServicesComponent } from './views/services/services.component';
import { RipleyComponent } from './views/ripley/ripley.component';
import { WorkersSlideComponent } from './shared/components/workers-slide/workers-slide.component';
import { TalentComponent } from './views/talent/talent.component';
import { AlliesComponent } from './shared/components/allies/allies.component';
import { LetsTalkComponent } from './shared/components/lets-talk/lets-talk.component';
import { ContactDashboardComponent } from './views/contact-dashboard/contact-dashboard.component';
import { ServicesTabComponent } from './shared/components/services-tab/services-tab.component';
import { CookiesComponent } from './views/cookies/cookies.component';
import { CookiesBarComponent } from './shared/components/cookies-bar/cookies-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NosotrosComponent,
    ContactComponent,
    IndexComponent,
    ToolbarComponent,
    ProjectsDashboardComponent,
    NotifaiVista1Component,
    FooterComponent,
    ProjectsSlideComponent,
    MainSliderComponent,
    DescripcionComponent,
    FirstSectionComponent,
    NotifaiComponent,
    SecondSectionComponent,
    ServicesComponent,
    RipleyComponent,
    WorkersSlideComponent,
    TalentComponent,
    AlliesComponent,
    LetsTalkComponent,
    ContactDashboardComponent,
    ServicesTabComponent,
    CookiesComponent,
    CookiesBarComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    DragScrollModule,
    MatListModule,
    MatSidenavModule,
    NguCarouselModule,
    MatTabsModule,
    MatRippleModule,
    MatStepperModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
