import { Observable } from 'rxjs/Observable';
export declare class MyWebSocketService {
    private websocket;
    private state;
    friends_list: Array<number>;
    my_id: number;
    private componentMethodCallSource;
    componentMethodCalled$: Observable<any>;
    constructor(url: any, query_parm?: any);
    onOpen(e: any): void;
    onMessage(e: any): void;
    onError(e: any): void;
    doSend(message: any): void;
}
