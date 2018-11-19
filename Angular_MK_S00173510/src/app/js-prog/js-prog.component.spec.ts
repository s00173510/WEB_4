import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsProgComponent } from './js-prog.component';

describe('JsProgComponent', () => {
  let component: JsProgComponent;
  let fixture: ComponentFixture<JsProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
