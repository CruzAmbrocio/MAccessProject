import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolCreatedComponent } from './rol-created.component';

describe('RolCreatedComponent', () => {
  let component: RolCreatedComponent;
  let fixture: ComponentFixture<RolCreatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolCreatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
