import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProject3Component } from './sub-project3.component';

describe('SubProject3Component', () => {
  let component: SubProject3Component;
  let fixture: ComponentFixture<SubProject3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProject3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProject3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
