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
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form.component';

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
    EnquiryFormComponent,
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

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.openModalAutomatically();

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

  openModalAutomatically(): void {
    const modalElement = document.getElementById('enquiryModal');
    if (modalElement) {
      const bootstrapModal = new (window as any).bootstrap.Modal(modalElement);
      bootstrapModal.show();
    }
  }
}
