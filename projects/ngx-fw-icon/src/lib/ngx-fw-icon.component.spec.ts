import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgxFwIconComponent } from './ngx-fw-icon.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import { By } from '@angular/platform-browser';
import { icon, NgxFwIconMockComponent } from './ngx-fw-icon-mock.component';
import { SvgSize } from './ngx-fw-icon.sizes';

describe('NgxFwIconComponent', () => {
  let component: NgxFwIconMockComponent;
  let fixture: ComponentFixture<NgxFwIconMockComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [NgxFwIconComponent, NgxFwIconMockComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFwIconMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());
  it('should test input for types', () => expect(component.type).toBe(icon));
  it('should test input for size', () =>
    expect(component.size).toBe(SvgSize.sm));
  it('should test data on render', () => {
    const { debugElement } = fixture;
    const { link, size, type } = debugElement.query(
      By.css('[data-qa="svg"]')
    ).context;
    expect(link).toBe(
      '/assets/svgs/fw-icon-brands-amazon.svg#fw-icon-brands-amazon'
    );
    expect(size).toBe(SvgSize.sm);
    expect(type).toBe(icon);
  });
});
