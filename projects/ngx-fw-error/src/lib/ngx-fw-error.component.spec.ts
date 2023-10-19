import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFwErrorComponent } from './ngx-fw-error.component';

describe('NgxFwErrorComponent', () => {
  let component: NgxFwErrorComponent;
  let fixture: ComponentFixture<NgxFwErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxFwErrorComponent]
    });
    fixture = TestBed.createComponent(NgxFwErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
