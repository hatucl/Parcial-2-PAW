import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HojaDeVida } from './hoja-de-vida';

describe('HojaDeVida', () => {
  let component: HojaDeVida;
  let fixture: ComponentFixture<HojaDeVida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HojaDeVida]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HojaDeVida);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
