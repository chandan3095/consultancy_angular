import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionTitleComponent, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
