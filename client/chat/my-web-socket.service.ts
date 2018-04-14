import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyWebSocketService {

private websocket;

  // Observable string sources
  private componentMethodCallSource = new Subject<any>();
  
  // Observable string streams
  componentMethodCalled$ = this.componentMethodCallSource.asObservable();


  constructor(url,query_parm?:any) { 
  	this.websocket =  new WebSocket('ws:'+url+query_parm);

  	this.websocket.onopen = (e) => {
        this.onOpen(e)
    };


    this.websocket.onmessage = (e) => {
        this.onMessage(e)
    };

    this.websocket.onerror = (e) => {
        this.onError(e)
    };
  }

  onOpen(e)
  {

  }

  onMessage(e)
  {
    let data = JSON.parse(e.data)
    console.log(data);
    
    this.componentMethodCallSource.next(data);

  }

  onError(e)
  {

  }


  doSend(message) {
    console.log('dosend'+message);
    this.websocket.send(message);

  }


}
