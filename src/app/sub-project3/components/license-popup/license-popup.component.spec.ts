import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LicensePopupComponent } from './license-popup.component';

describe('LicensePopupComponent', () => {
  let component: LicensePopupComponent;
  let fixture: ComponentFixture<LicensePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LicensePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LicensePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
