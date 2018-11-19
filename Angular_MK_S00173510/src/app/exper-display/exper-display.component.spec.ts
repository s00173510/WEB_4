import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperDisplayComponent } from './exper-display.component';

describe('ExperDisplayComponent', () => {
  let component: ExperDisplayComponent;
  let fixture: ComponentFixture<ExperDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
