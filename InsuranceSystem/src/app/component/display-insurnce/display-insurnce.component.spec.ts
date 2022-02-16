import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayInsurnceComponent } from './display-insurnce.component';

describe('DisplayInsurnceComponent', () => {
  let component: DisplayInsurnceComponent;
  let fixture: ComponentFixture<DisplayInsurnceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayInsurnceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayInsurnceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
