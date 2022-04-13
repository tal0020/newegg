import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CategoryCardComponent } from './category.card.component';

describe('CategoryCardComponent', () => {
  let component: CategoryCardComponent;
  let fixture: ComponentFixture<CategoryCardComponent>;
  let cardDe: DebugElement;
  let cardEl: HTMLElement;
  let expectedBestCardDescription: string = "Hello";

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({declarations: [CategoryCardComponent]}).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryCardComponent);
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