import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { SalesEnableComponent } from './sales-enable/sales-enable.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurWorkComponent } from './our-work/our-work.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, SalesEnableComponent, AboutUsComponent, OurWorkComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
