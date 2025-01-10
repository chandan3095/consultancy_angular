import { Component, OnInit } from '@angular/core';
import { PropsButtonComponent } from '../../shared-components/props-button/props-button.component';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';
import { WhyUsSecComponent } from '../../components/why-us-sec/why-us-sec.component';
import * as whyUsData from './data/data.json';
import { CommonModule } from '@angular/common';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { SectionCarouselComponent } from '../../components/section-carousel/section-carousel.component';

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
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  whyUsList: { title: string; src: string }[] = [];
  serviceList: { title: string; image: string; description: string }[] = [];
  linkList: { title: string; image: string; description: string }[] = [];
  studentServiceList: { title: string; image: string; description: string }[] =
    [];

  ngOnInit(): void {
    this.whyUsList = (whyUsData as any).whyUsList;
    this.serviceList = (whyUsData as any).servicesList;
    this.linkList = (whyUsData as any).linksList;
    this.studentServiceList = (whyUsData as any).studentServiceList;
  }
}
