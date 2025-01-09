import { Component, Input } from '@angular/core';

@Component({
  selector: 'why-us-sec',
  standalone: true,
  imports: [],
  templateUrl: './why-us-sec.component.html',
  styleUrl: './why-us-sec.component.css',
})
export class WhyUsSecComponent {
  @Input() title: string = '';
  @Input() src: string = '';
}
