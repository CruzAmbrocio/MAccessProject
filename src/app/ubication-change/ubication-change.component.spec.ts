import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationChangeComponent } from './ubication-change.component';

describe('UbicationChangeComponent', () => {
  let component: UbicationChangeComponent;
  let fixture: ComponentFixture<UbicationChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicationChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicationChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
