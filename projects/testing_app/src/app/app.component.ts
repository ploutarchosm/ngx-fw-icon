import { Component, ViewEncapsulation } from '@angular/core';
import { NgxFwTypes, SvgSize } from 'ngx-fw-icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'testing_app';
  icon = NgxFwTypes['fw-icon-brands-facebook-messenger'];
  size = SvgSize.lg;
}
