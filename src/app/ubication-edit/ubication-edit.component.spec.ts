import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationEditComponent } from './ubication-edit.component';

describe('UbicationEditComponent', () => {
  let component: UbicationEditComponent;
  let fixture: ComponentFixture<UbicationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbicationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
