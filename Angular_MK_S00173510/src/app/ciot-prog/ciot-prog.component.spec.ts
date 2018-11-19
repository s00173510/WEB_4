import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiotProgComponent } from './ciot-prog.component';

describe('CiotProgComponent', () => {
  let component: CiotProgComponent;
  let fixture: ComponentFixture<CiotProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiotProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiotProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
