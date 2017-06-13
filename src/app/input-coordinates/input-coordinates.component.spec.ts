import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCoordinatesComponent } from './input-coordinates.component';

describe('InputCoordinatesComponent', () => {
  let component: InputCoordinatesComponent;
  let fixture: ComponentFixture<InputCoordinatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCoordinatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
