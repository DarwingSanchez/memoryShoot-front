import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraAlbumComponent } from './calculadora-album.component';

describe('CalculadoraAlbumComponent', () => {
  let component: CalculadoraAlbumComponent;
  let fixture: ComponentFixture<CalculadoraAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
