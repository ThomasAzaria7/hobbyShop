/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item_category4Component } from './item_category4.component';

describe('Item_category4Component', () => {
  let component: Item_category4Component;
  let fixture: ComponentFixture<Item_category4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_category4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_category4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
