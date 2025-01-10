import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
