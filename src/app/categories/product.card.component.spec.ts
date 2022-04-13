import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProductCardComponent } from './product.card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedBestCardDescription: string = "Hello";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [ProductCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;

    cardDe = fixture.debugElement.query(By.css('.card'));
    cardEl = cardDe.nativeElement;

    component.description = "Hello";
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display bestcard description', () => {
    expect(cardEl.textContent).toContain(expectedBestCardDescription);
  });
});