import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAddUsersComponent } from './header-add-users.component';

describe('HeaderAddUsersComponent', () => {
  let component: HeaderAddUsersComponent;
  let fixture: ComponentFixture<HeaderAddUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderAddUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAddUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
