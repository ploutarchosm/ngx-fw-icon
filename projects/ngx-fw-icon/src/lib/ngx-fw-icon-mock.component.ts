import { NgxFwTypes } from './ngx-fw-icon.types';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFwIconComponent } from './ngx-fw-icon.component';
import { SvgSize } from './ngx-fw-icon.sizes';
export const icon: NgxFwTypes = NgxFwTypes['fw-icon-brands-amazon'];

@Component({
  selector: 'ngx-fw-icon-mock',
  template: '<ngx-fw-icon [type]="type" [size]="size"></ngx-fw-icon>',
  standalone: true,
  imports: [CommonModule, NgxFwIconComponent],
})
export class NgxFwIconMockComponent {
  type = icon;
  size = SvgSize.sm;
}
