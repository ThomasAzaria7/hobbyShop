/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Store_shopComponent } from './Store_shop.component';

describe('Store_shopComponent', () => {
  let component: Store_shopComponent;
  let fixture: ComponentFixture<Store_shopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Store_shopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Store_shopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
