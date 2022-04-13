import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { BestCardComponent } from './best-card.component';

describe('BestCardComponent', () => {
  let component: BestCardComponent;
  let fixture: ComponentFixture<BestCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedBestCardDescription: string = "Hello";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [BestCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestCardComponent);
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