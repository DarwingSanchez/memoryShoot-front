import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSalesComponent } from './adm-sales.component';

describe('AdmSalesComponent', () => {
  let component: AdmSalesComponent;
  let fixture: ComponentFixture<AdmSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
