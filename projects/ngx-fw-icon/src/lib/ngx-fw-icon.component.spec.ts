import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxFwIconComponent } from './ngx-fw-icon.component';
import { Component } from '@angular/core';
import { NgxFwTypes } from './ngx-fw-icon.types';
import { SvgSize } from './ngx-fw-icon.sizes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-mock-svg-icon',
  template: '<ngx-fw-icon [type]="type" [size]="size"></ngx-fw-icon>',
})
class MockSvgIconComponent {
  type: NgxFwTypes = NgxFwTypes['icon-brands-amazon'];
  size: SvgSize = SvgSize.sm;
}

describe('NgxFwIconComponent', () => {
  let component: MockSvgIconComponent;
  let fixture: ComponentFixture<MockSvgIconComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxFwIconComponent],
      declarations: [MockSvgIconComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockSvgIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
  it('should test input for types', () =>
    expect(component.type).toBe(NgxFwTypes['icon-brands-amazon']));
  it('should test svg render', () => {
    const { debugElement } = fixture;
    const svgOutput = debugElement.query(By.css('[data-qa="svg"]'));
    console.log(svgOutput);
  });
});
