import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubProject2Component } from './sub-project2.component';

describe('SubProject2Component', () => {
  let component: SubProject2Component;
  let fixture: ComponentFixture<SubProject2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubProject2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubProject2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
