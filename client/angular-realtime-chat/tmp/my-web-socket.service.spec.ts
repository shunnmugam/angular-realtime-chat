import { TestBed, inject } from '@angular/core/testing';

import { MyWebSocketService } from './my-web-socket.service';

describe('MyWebSocketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyWebSocketService]
    });
  });

  it('should be created', inject([MyWebSocketService], (service: MyWebSocketService) => {
    expect(service).toBeTruthy();
  }));
});
