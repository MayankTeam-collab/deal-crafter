import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroComponent, Section1Component, Section2Component],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
