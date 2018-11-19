import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguageImgComponent } from './lenguage-img.component';

describe('LenguageImgComponent', () => {
  let component: LenguageImgComponent;
  let fixture: ComponentFixture<LenguageImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenguageImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LenguageImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
