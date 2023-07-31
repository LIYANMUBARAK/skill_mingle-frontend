import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { userLoginAuthGuard } from './user-login-auth.guard';

describe('userLoginAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => userLoginAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
