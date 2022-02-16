import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExloginComponent } from './exlogin.component';

describe('ExloginComponent', () => {
  let component: ExloginComponent;
  let fixture: ComponentFixture<ExloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
