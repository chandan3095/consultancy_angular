import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { CommonModule } from '@angular/common';
import companies from './data/data.json';

@Component({
  selector: 'section-placement-company',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-placement-company.component.html',
  styleUrl: './section-placement-company.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionPlacementCompanyComponent {
  @Input() companies: { slug: string; logo: string }[] = companies;

  swiperConfig = {
    loop: true,
    slidesPerView: 3,
    speed: 500,
    navigation: true,
    spaceBetween: 30,
  };
}
