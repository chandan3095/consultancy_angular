import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../shared-components/section-title/section-title.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { CommonModule } from '@angular/common';
import * as whyUsData from '../home/data/data.json';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    SectionTitleComponent,
    SectionCardComponent,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit {
  serviceList: { title: string; image: string; description: string }[] = [];
  studentServiceList: { title: string; image: string; description: string }[] =
    [];

  ngOnInit(): void {
    this.serviceList = (whyUsData as any).servicesList;
    this.studentServiceList = (whyUsData as any).studentServiceList;
  }
}
