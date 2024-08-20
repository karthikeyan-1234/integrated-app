import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProject1Component } from './sub-project1.component';

describe('SubProject1Component', () => {
  let component: SubProject1Component;
  let fixture: ComponentFixture<SubProject1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProject1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProject1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
