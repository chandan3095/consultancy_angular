import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CityComponent } from './pages/city/city.component';
import { MissionVisionComponent } from './pages/mission-vision/mission-vision.component';
import { MessageFromDirectorComponent } from './pages/message-from-director/message-from-director.component';
import { AdvisoryTeamComponent } from './pages/advisory-team/advisory-team.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { AdmissionAssistanceComponent } from './pages/admission-assistance/admission-assistance.component';
import { MbaPrepClassesComponent } from './pages/mba-prep-classes/mba-prep-classes.component';
import { EducationFairsComponent } from './pages/education-fairs/education-fairs.component';
import { PsychometricTestComponent } from './pages/psychometric-test/psychometric-test.component';
import { SkillDevelopmentCoursesComponent } from './pages/skill-development-courses/skill-development-courses.component';
import { UgComponent } from './pages/ug/ug.component';
import { UnitedKingdomComponent } from './pages/united-kingdom/united-kingdom.component';
import { ScotlandComponent } from './pages/scotland/scotland.component';
import { FinlandComponent } from './pages/finland/finland.component';
import { GermanyComponent } from './pages/germany/germany.component';
import { CanadaComponent } from './pages/canada/canada.component';
import { AustraliaComponent } from './pages/australia/australia.component';
import { ForeignLanguagesComponent } from './pages/foreign-languages/foreign-languages.component';
import { OnlineCoursesComponent } from './pages/online-courses/online-courses.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'colleges/:slug', component: CityComponent,},
  { path: 'mission-vision', component: MissionVisionComponent},
  { path: 'message-from-director', component: MessageFromDirectorComponent},
  { path: 'advisory-team', component: AdvisoryTeamComponent},
  { path: 'work-with-us', component: WorkWithUsComponent},
  { path: 'admission-assistance', component: AdmissionAssistanceComponent},
  { path: 'mba-prep-classes', component: MbaPrepClassesComponent},
  { path: 'education-fairs', component: EducationFairsComponent},
  { path: 'psychometric-test', component: PsychometricTestComponent},
  { path: 'skill-development-courses', component: SkillDevelopmentCoursesComponent},
  { path: 'education-loan', component: EducationFairsComponent},
  { path: 'ug', component: UgComponent},
  { path: 'mba-pgdm', component: MbaPrepClassesComponent},
  { path: 'united-kingdom', component: UnitedKingdomComponent},
  { path: 'scotland', component: ScotlandComponent},
  { path: 'finland', component: FinlandComponent},
  { path: 'germany', component: GermanyComponent},
  { path: 'canada', component: CanadaComponent},
  { path: 'australia', component: AustraliaComponent},
  { path: 'foreign-languages', component: ForeignLanguagesComponent},
  { path: 'online-courses', component: OnlineCoursesComponent},
];
