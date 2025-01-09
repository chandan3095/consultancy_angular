import { Component, OnInit } from '@angular/core';
import { PropsButtonComponent } from '../../shared-components/props-button/props-button.component';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';
import { WhyUsSecComponent } from '../../components/why-us-sec/why-us-sec.component';
import * as whyUsData from './data/data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PropsButtonComponent,
    SectionTitleComponent,
    WhyUsSecComponent,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  whyUsList: { title: string; src: string }[] = [];

  ngOnInit(): void {
    this.whyUsList = (whyUsData as any).whyUsList;
  }
}
