import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { APP_BASE_HREF } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { ProfileComponent } from './profile/profile.component';
import { EscCancelationDirective } from './directives/esc-cancelation.directive';
import { NavigatorComponent } from './navigator/navigator.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DpLogoComponent } from './dp-logo/dp-logo.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TypingComponent } from './typing/typing.component';
import { BackIconComponent } from './ui/back-icon/back-icon/back-icon.component';
import { KeySkillBtnComponent } from './key-skill-btn/key-skill-btn.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { NoEmojiPipe } from './pipes/no-emoji.pipe';
import { MaxLengthPipe } from './pipes/max-length.pipe';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CrossIconComponent } from './ui/cross-icon/cross-icon.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    ProfileComponent,
    EscCancelationDirective,
    NavigatorComponent,
    LandingPageComponent,
    DpLogoComponent,
    PortfolioComponent,
    TypingComponent,
    BackIconComponent,
    KeySkillBtnComponent,
    ProjectsComponent,
    ProjectCardComponent,
    NoEmojiPipe,
    MaxLengthPipe,
    ProjectDetailsComponent,
    CrossIconComponent,
    AboutComponent,
    ContactComponent,
    ProfileCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '!' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
