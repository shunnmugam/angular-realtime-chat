import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
var MyWebSocketService = /** @class */ (function () {
    function MyWebSocketService(url, query_parm) {
        var _this = this;
        this.state = 0;
        // Observable string sources
        this.componentMethodCallSource = new Subject();
        // Observable string streams
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
        this.websocket = new WebSocket('ws:' + url + query_parm);
        this.websocket.onopen = function (e) {
            _this.onOpen(e);
        };
        this.websocket.onmessage = function (e) {
            _this.onMessage(e);
        };
        this.websocket.onerror = function (e) {
            _this.onError(e);
        };
    }
    MyWebSocketService.prototype.onOpen = function (e) {
        this.state = 1;
        if (this.friends_list.length > 0) {
            this.doSend(JSON.stringify({ 'type': 'find_friends_status',
                'friends': this.friends_list,
                'my_id': this.my_id
            }));
        }
    };
    MyWebSocketService.prototype.onMessage = function (e) {
        var data = JSON.parse(e.data);
        console.log(data);
        this.componentMethodCallSource.next(data);
    };
    MyWebSocketService.prototype.onError = function (e) {
    };
    MyWebSocketService.prototype.doSend = function (message) {
        console.log('dosend' + message);
        this.websocket.send(message);
    };
    MyWebSocketService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    MyWebSocketService.ctorParameters = function () { return [
        null,
        null,
    ]; };
    return MyWebSocketService;
}());
export { MyWebSocketService };
//# sourceMappingURL=my-web-socket.service.js.map