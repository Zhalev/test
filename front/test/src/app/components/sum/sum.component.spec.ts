import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SumComponent } from './sum.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SumComponent', () => {
  let component: SumComponent;
  let fixture: ComponentFixture<SumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ SumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have a > 0`, () => {
    expect(component.a).toBeGreaterThanOrEqual(0);
  });
});
