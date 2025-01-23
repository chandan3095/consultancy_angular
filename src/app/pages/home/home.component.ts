import { Component, OnInit } from '@angular/core';
import { PropsButtonComponent } from '../../shared-components/props-button/props-button.component';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';
import { WhyUsSecComponent } from '../../components/why-us-sec/why-us-sec.component';
import * as whyUsData from './data/data.json';
import { CommonModule } from '@angular/common';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { SectionCarouselComponent } from '../../components/section-carousel/section-carousel.component';
import { SectionAnimatedComponent } from '../../components/section-animated/section-animated.component';
import { Router } from '@angular/router';
import { SectionPlacementCompanyComponent } from "../../components/section-placement-company/section-placement-company.component";
import { init } from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PropsButtonComponent,
    SectionTitleComponent,
    WhyUsSecComponent,
    CommonModule,
    SectionCardComponent,
    SectionCarouselComponent,
    SectionAnimatedComponent,
    SectionPlacementCompanyComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  associatedCities: { title: string; src: string; slug: string }[] = [];
  serviceList: { title: string; image: string; description: string }[] = [];
  linkList: { title: string; image: string; description: string }[] = [];
  studentServiceList: { title: string; image: string; description: string }[] =
    [];

  constructor(private router: Router) {
    let PureCounter:any;
    let script = window.document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/@srexi/purecounterjs@1.5.0/dist/purecounter_vanilla.min.js";
    window.document.querySelector('body')?.appendChild(script);

    let newScript = window.document.createElement('script');
    newScript.innerHTML = `
      window.setTimeout(() => {
        new PureCounter();
      }, 1000);
    `;
    window.document.querySelector('body')?.appendChild(newScript);
  }

  ngOnInit(): void {
    this.associatedCities = (whyUsData as any).associatedCities;
    this.serviceList = (whyUsData as any).servicesList;
    this.linkList = (whyUsData as any).linksList;
    this.studentServiceList = (whyUsData as any).studentServiceList;
  }

  public onServiceClick() {
    this.router.navigate(['services']);
  }

  public onCarouselClick() {
    console.log('clicked');
  }
}
