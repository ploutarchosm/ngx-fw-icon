import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgxFwTypes } from './ngx-fw-icon.types';
import { SvgSize } from './ngx-fw-icon.sizes';

@Component({
  selector: 'ngx-fw-icon',
  template: ` <svg
    [class]="size"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    data-qa="svg">
    <use [attr.xlink:href]="link" [attr.href]="link" />
  </svg>`,
  styleUrls: ['./ngx-fw-icon.component.scss'],
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None,
})
export class NgxFwIconComponent implements OnInit {
  @Input({ required: true }) size: SvgSize;
  @Input({ required: true }) type: NgxFwTypes;

  protected link: string = '';

  ngOnInit(): void {
    this.link = `/assets/svgs/${this.type}.svg#${this.type}`;
  }
}
