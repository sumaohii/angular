import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkemailComponent } from './linkemail.component';

describe('LinkemailComponent', () => {
  let component: LinkemailComponent;
  let fixture: ComponentFixture<LinkemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
