import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesMultiplesComponent } from './imagenes-multiples.component';

describe('ImagenesMultiplesComponent', () => {
  let component: ImagenesMultiplesComponent;
  let fixture: ComponentFixture<ImagenesMultiplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenesMultiplesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesMultiplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
