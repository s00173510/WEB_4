import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgContComponent } from './prog-cont.component';

describe('ProgContComponent', () => {
  let component: ProgContComponent;
  let fixture: ComponentFixture<ProgContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
