import { Component, Input } from '@angular/core';

@Component({
  selector: 'section-card',
  standalone: true,
  imports: [],
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.css',
})
export class SectionCardComponent {
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() description: string = '';
}
