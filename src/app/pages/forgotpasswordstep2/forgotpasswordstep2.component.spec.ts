import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Forgotpasswordstep2Component } from './forgotpasswordstep2.component';

describe('Forgotpasswordstep2Component', () => {
  let component: Forgotpasswordstep2Component;
  let fixture: ComponentFixture<Forgotpasswordstep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Forgotpasswordstep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Forgotpasswordstep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
