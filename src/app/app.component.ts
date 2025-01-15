import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared-components/header/header.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    EnquiryFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.openModalAutomatically(5000);
  }
  openModalAutomatically(delay: number): void {
    setTimeout(() => {
      const modalElement = document.getElementById('enquiryModal');
      if (modalElement) {
        const bootstrapModal = new (window as any).bootstrap.Modal(modalElement);
        bootstrapModal.show();
      }
    }, delay);
  }
}
