import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KycImageComponent } from './kyc-image.component';

describe('KycImageComponent', () => {
  let component: KycImageComponent;
  let fixture: ComponentFixture<KycImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KycImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KycImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
