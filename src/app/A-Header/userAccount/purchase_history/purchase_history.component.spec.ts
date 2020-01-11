/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Purchase_historyComponent } from './purchase_history.component';

describe('Purchase_historyComponent', () => {
  let component: Purchase_historyComponent;
  let fixture: ComponentFixture<Purchase_historyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Purchase_historyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Purchase_historyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
