import { Component, Input, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Swiper from 'swiper';
import { SectionCardComponent } from '../section-card/section-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'section-carousel',
  standalone: true,
  imports: [SectionCardComponent, CommonModule],
  templateUrl: './section-carousel.component.html',
  styleUrl: './section-carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SectionCarouselComponent {
  @Input() linkList: { title: string; image: string; description: string }[] =
    [];

  swiperConfig = {
    loop: true,
    slidesPerView: 3,
    speed: 500,
    navigation: true,
    spaceBetween: 30,
  };
}
