/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerComponent } from './computer.component';
import { MdCard } from '@angular/material';


describe('ComputerComponent', () => {
  let component: ComputerComponent;
  let fixture: ComponentFixture<ComputerComponent>;

  beforeEach( async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ComputerComponent,
        MdCard
         ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('/ Properties', () => {

    it(`should have an Input property 'computerDisplayText'`, () => {
      const app = fixture.debugElement.componentInstance;
      expect(app.computerDisplayText).toBeTruthy;
    });
  });
});
