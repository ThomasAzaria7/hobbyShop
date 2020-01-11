/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item_category1Component } from './item_category1.component';

describe('Item_category1Component', () => {
  let component: Item_category1Component;
  let fixture: ComponentFixture<Item_category1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_category1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_category1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
