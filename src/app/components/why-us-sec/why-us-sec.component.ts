import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'why-us-sec',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './why-us-sec.component.html',
  styleUrl: './why-us-sec.component.css',
})
export class WhyUsSecComponent {
  @Input() title: string = '';
  @Input() src: string = '';
  @Input() slug: string = '';

  constructor(private router: Router) {}

  public onCityClick(slug: string){
    this.router.navigate(['colleges', slug]);
  }
}
