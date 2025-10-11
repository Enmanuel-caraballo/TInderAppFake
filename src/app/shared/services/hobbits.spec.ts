import { TestBed } from '@angular/core/testing';

import { Hobbits } from './hobbits';

describe('Hobbits', () => {
  let service: Hobbits;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hobbits);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
