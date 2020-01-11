/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item_category3Component } from './item_category3.component';

describe('Item_category3Component', () => {
  let component: Item_category3Component;
  let fixture: ComponentFixture<Item_category3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_category3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_category3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
