import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingStepsGirlComponent } from './landing-steps-girl.component';

describe('LandingStepsGirlComponent', () => {
  let component: LandingStepsGirlComponent;
  let fixture: ComponentFixture<LandingStepsGirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingStepsGirlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingStepsGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
