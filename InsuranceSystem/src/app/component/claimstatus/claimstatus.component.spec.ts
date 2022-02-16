import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimstatusComponent } from './claimstatus.component';

describe('ClaimstatusComponent', () => {
  let component: ClaimstatusComponent;
  let fixture: ComponentFixture<ClaimstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
