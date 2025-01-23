import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { register } from 'swiper/element/bundle';
import { init } from 'aos';

register();

function aosInit() {
  init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
