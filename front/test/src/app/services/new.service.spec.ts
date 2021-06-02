import { TestBed } from '@angular/core/testing';

import { NewService } from './new.service';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NewService', () => {
  let service: NewService;
  const myHttpClientSpy = jasmine.createSpyObj(
    HttpClientTestingModule, [],
  )

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],

    });
    service = TestBed.inject(NewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be summed 1+45', function () {
        const num = service.getSum(1,45)
    expect(num).toBe(46);
  });
  it('without b, sum should be = a', function () {
    const num = service.getSum(1)
    expect(num).toBe(1);
  });
  it('without b, sum should be <> a', function () {
    const num = service.getSum(1, 2)
    expect(num).toBe(1);
  });


});
