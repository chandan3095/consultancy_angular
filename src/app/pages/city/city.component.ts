import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import  * as cityColleges from './data/data.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
  slug = ""
  colleges = []
  constructor(private rout: ActivatedRoute) {
    this.slug = rout.snapshot.params['slug'];
    this.colleges = (cityColleges as any)[this.slug];
  }
}
