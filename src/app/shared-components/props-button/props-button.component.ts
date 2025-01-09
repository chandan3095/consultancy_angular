import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-props-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './props-button.component.html',
  styleUrl: './props-button.component.css',
})
export class PropsButtonComponent {
  @Input() title: string = '';
  @Input() isFilled: boolean = false;
  @Input() color: string = '';

  get buttonClasses(): string {
    let classes = this.isFilled ? 'btn btn-primary' : 'btn btn-outline-primary';
    if (this.color) {
      classes = classes.replace('primary', this.color);
    }
    return classes;
  }
}
