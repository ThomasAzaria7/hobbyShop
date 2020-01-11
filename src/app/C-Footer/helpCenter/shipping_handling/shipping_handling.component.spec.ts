/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Shipping_handlingComponent } from './shipping_handling.component';

describe('Shipping_handlingComponent', () => {
  let component: Shipping_handlingComponent;
  let fixture: ComponentFixture<Shipping_handlingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Shipping_handlingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Shipping_handlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
