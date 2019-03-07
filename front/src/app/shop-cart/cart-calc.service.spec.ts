import { TestBed } from '@angular/core/testing';

import { CartCalcService } from './cart-calc.service';

describe('CartCalcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartCalcService = TestBed.get(CartCalcService);
    expect(service).toBeTruthy();
  });
});
