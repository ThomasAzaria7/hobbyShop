/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Item_category2Component } from './item_category2.component';

describe('Item_category2Component', () => {
  let component: Item_category2Component;
  let fixture: ComponentFixture<Item_category2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Item_category2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Item_category2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
