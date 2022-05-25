import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutYouComponent } from './components/about-you/about-you.component';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { HardAndSoftSkillsComponent } from './components/hard-and-soft-skills/hard-and-soft-skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutYouComponent,
    WorkExperienceComponent,
    EducationComponent,
    HardAndSoftSkillsComponent,
    ProyectsComponent,
    LogInComponent,
    SingUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
