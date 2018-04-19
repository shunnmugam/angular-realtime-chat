import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MyWebSocketService {

private websocket;
private state:number = 0;
public friends_list:Array<number>;
public my_id : number;

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
    this.state = 1;

    if(this.friends_list.length>0){

      this.doSend(
        JSON.stringify({'type':'find_friends_status',
            'friends' : this.friends_list,
            'my_id' : this.my_id
          })
        );
    }

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
