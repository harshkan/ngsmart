import { TestBed, inject } from '@angular/core/testing';


import {DemoService} from "./demo.service";

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemoService]
    });
  });

  /*it('should be created', inject([DemoService], (service: DemoService) => {
    expect(service).toBeTruthy();
  }));*/
});
