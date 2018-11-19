import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsharpProgComponent } from './csharp-prog.component';

describe('CsharpProgComponent', () => {
  let component: CsharpProgComponent;
  let fixture: ComponentFixture<CsharpProgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsharpProgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsharpProgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
