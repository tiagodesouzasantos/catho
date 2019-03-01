import { TestBed } from '@angular/core/testing';

import { ShopCartServiceService } from './shop-cart-service.service';

describe('ShopCartServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopCartServiceService = TestBed.get(ShopCartServiceService);
    expect(service).toBeTruthy();
  });
});
