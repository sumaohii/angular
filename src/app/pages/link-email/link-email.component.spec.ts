import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEmailComponent } from './link-email.component';

describe('LinkEmailComponent', () => {
  let component: LinkEmailComponent;
  let fixture: ComponentFixture<LinkEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
