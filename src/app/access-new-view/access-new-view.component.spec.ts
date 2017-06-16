import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessNewViewComponent } from './access-new-view.component';

describe('AccessNewViewComponent', () => {
  let component: AccessNewViewComponent;
  let fixture: ComponentFixture<AccessNewViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessNewViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessNewViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
