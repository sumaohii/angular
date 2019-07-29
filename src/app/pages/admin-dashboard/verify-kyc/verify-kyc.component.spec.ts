import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyKycComponent } from './verify-kyc.component';

describe('VerifyKycComponent', () => {
  let component: VerifyKycComponent;
  let fixture: ComponentFixture<VerifyKycComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyKycComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyKycComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
