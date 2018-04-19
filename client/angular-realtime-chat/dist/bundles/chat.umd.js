(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', '@angular/common', '@angular/forms'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.chat = {}),global.ng.core,null,null,null));
}(this, (function (exports,core,Subject,common,forms) { 'use strict';

    var MyWebSocketService = /** @class */ (function () {
        function MyWebSocketService(url, query_parm) {
            var _this = this;
            this.state = 0;
            // Observable string sources
            this.componentMethodCallSource = new Subject.Subject();
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
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MyWebSocketService.ctorParameters = function () { return [
            null,
            null,
        ]; };
        return MyWebSocketService;
    }());

    /**** server environment ****/
    //is server side is enabled
    var server = true;
    /**** socket environments ****/
    var web_socket_url = 'localhost:2000';

    var MainComponent = /** @class */ (function () {
        function MainComponent() {
            this.beforeSend = new core.EventEmitter();
            this.afterSend = new core.EventEmitter();
            this.afterUserSelect = new core.EventEmitter();
            this.is_collapse = false;
        }
        MainComponent.prototype.ngOnInit = function () {
            var _this = this;
            var socket_url;
            if (this.my_env != undefined && this.my_env.web_socket_url != undefined) {
                socket_url = this.my_env.web_socket_url;
            }
            else
                socket_url = web_socket_url;
            this._my_web_soket = new MyWebSocketService(socket_url, '?my_id=' + this.current_user_id);
            //after recevied message
            this._my_web_soket.componentMethodCalled$.subscribe(function (data) {
                if (data.type == 'new-join') {
                    _this.peoples.map(function (people) {
                        if (people.id == parseInt(data.msg)) {
                            people.status = 'online';
                        }
                        return people;
                    });
                    //console.log(this.peoples);
                }
                else if (data.type == 'find_friends_status') {
                    _this.peoples.map(function (people) {
                        if (data.msg.indexOf(people.id) != -1) {
                            people.status = 'online';
                        }
                        else
                            people.status = 'offline';
                        return people;
                    });
                }
                else if (data.type == 'friend-exit') {
                    _this.peoples.map(function (people) {
                        if (people.id == parseInt(data.msg)) {
                            people.status = 'offline';
                        }
                        return people;
                    });
                }
                else if (data.type == 'message') {
                    var from_id_1 = parseInt(data.my_id);
                    _this.peoples.map(function (people) {
                        if (people.id == from_id_1) {
                            people.messages.push({
                                status: 'received',
                                type: 'received',
                                msg: data.msg
                            });
                            if (_this.selected_people == undefined || _this.selected_people.id != from_id_1) {
                                if (people.unread_message_count != undefined)
                                    people.unread_message_count = people.unread_message_count + 1;
                                else
                                    people.unread_message_count = 1;
                            }
                        }
                        return people;
                    });
                }
            });
            var peoples_id = [];
            console.log(this.peoples);
            for (var i = 0; i < this.peoples.length; i++) {
                peoples_id.push(this.peoples[i].id);
            }
            this._my_web_soket.my_id = this.current_user_id;
            this._my_web_soket.friends_list = peoples_id;
        };
        MainComponent.prototype.collapseIt = function (target) {
            this[target] == true ? this[target] = false : this[target] = true;
        };
        MainComponent.prototype.peopleOnclick = function (index) {
            this.selected_people = this.peoples[index];
            this.selected_people.unread_message_count = undefined;
            this.afterUserSelect.emit(this.peoples[index]);
            if (this.selected_people.status == 'online') {
                /*
                      let message = {'type':'subscribe',
                        'my_id':this.current_user_id,
                        'to_id':this.selected_people.id
                      };
                
                
                      //this.doSendMessage(message);
                      */
            }
        };
        MainComponent.prototype.closeChat = function () {
            /*
                this._my_web_soket.doSend(
            
                  JSON.stringify({'type':'exit',
                  'my_id':this.current_user_id
                }));
                */
            this.selected_people = undefined;
        };
        MainComponent.prototype.sendMessage = function () {
            if (this.message != '') {
                this.doSendMessage({ 'type': 'message',
                    'my_id': this.current_user_id,
                    'to_id': this.selected_people.id,
                    'message': this.message
                });
                this.selected_people.messages.push({
                    status: 'sent',
                    type: 'sent',
                    msg: this.message
                });
                this.message = '';
            }
        };
        MainComponent.prototype.doSendMessage = function (message) {
            if (this.beforeSend != undefined)
                this.beforeSend.emit(message);
            this._my_web_soket.doSend(JSON.stringify(message));
            if (this.afterSend != undefined) {
                this.afterSend.emit(message);
            }
        };
        MainComponent.decorators = [
            { type: core.Component, args: [{ selector: 'my-chat',
                        template: '<div id="my-chat" class="my-chat" *ngIf="peoples!=undefined"> <div id="ng-chat"> <div id="ng-chat-people" [ngClass]="{\'ng-chat-people-collapsed\': is_collapse}" > <a  class="ng-chat-title shadowed" href="javascript:void(0);" (click)="collapseIt(\'is_collapse\')"> <span > Friends </span> </a> <input  id="ng-chat-search_friend" type="search" placeholder="Search" class="ng-untouched ng-pristine ng-valid" [(ngModel)]="search_people"> <!----><ul  id="ng-chat-users"> <!----><li *ngFor="let people of peoples | searchPipe:\'name\':search_people;let i=index" (click)="peopleOnclick(i)"> <!----> <!----><img  alt="" class="avatar" height="30" width="30" [src]="people.image"> <strong  [title]="people.name">{{people.name}} <span class="un-read-message" *ngIf="people.unread_message_count!=undefined"> {{ people.unread_message_count }} </span> </strong> <span  class="ng-chat-user-status {{people.status}}" title="{{people.name}}"></span> </li> </ul> </div> <!----> <div [ngClass]="{\'ng-chat-people-collapsed\': is_collapse2 , \'ng-chat-window\' : true}"  style="right: 282px;" *ngIf="selected_people!=undefined" > <div  class="ng-chat-title" (click)="collapseIt(\'is_collapse2\')"> <strong  title="Arya Stark"> {{selected_people.name}} </strong> <span  class="ng-chat-user-status {{selected_people.status}}" [title]="selected_people.status"></span> <!----> <a  class="ng-chat-close" href="javascript:void(0);" (click)="closeChat()">X</a> </div> <div  class="ng-chat-messages"> <!----> <div *ngFor="let chat_message of selected_people.messages"> <div class="ng-chat-message" *ngIf="chat_message.type==\'sent\' "> <span >{{chat_message.msg}}</span> </div> <div  class="ng-chat-message ng-chat-message-received" *ngIf="chat_message.type==\'received\'"> <img  alt="" class="avatar" height="30" width="30" [src]="selected_people.image"> <span >{{chat_message.msg}}</span> </div> </div> </div> <form (ngSubmit)="sendMessage()"> <input #message_box  type="text" placeholder="Type a message" name="message" [(ngModel)]="message" class="">  </form> </div> </div> </div>',
                        styles: ['#ng-chat { position: fixed; z-index: 999; right: 0; bottom: 0; color: #5C5C5C; font-family: Arial, Helvetica, sans-serif; -webkit-box-sizing: initial; box-sizing: initial; font-size: 11pt; text-align: left; } #ng-chat-people { position: relative; width: 240px; height: 360px; border: 1px solid #A3A3A3; margin-right: 20px; background-color: #FFF; -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); border-bottom: 0; } #ng-chat-people.ng-chat-people-collapsed , .ng-chat-people-collapsed.ng-chat-window { height: 30px; } .ng-chat-title.shadowed { -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); } .ng-chat-title, .ng-chat-title:hover { position: relative; z-index: 2; height: 30px; line-height: 30px; font-size: 0.9em; padding: 0 10px; background-color: #FAFAFA; display: block; text-decoration: none; color: inherit; font-weight: 400; cursor: pointer; } #ng-chat-search_friend { display: block; padding: 7px 10px; margin: 0 auto; width: calc(100% - 20px); margin-top: 10px; font-size: 0.9em; -webkit-appearance: searchfield; } #ng-chat-users { padding: 0 10px; list-style: none; margin: 0; overflow: auto; position: absolute; top: 84px; bottom: 0; width: 100%; -webkit-box-sizing: border-box; box-sizing: border-box; } #ng-chat-users li { clear: both; margin-bottom: 10px; overflow: hidden; cursor: pointer; max-height: 30px; } #ng-chat-users li > img, #ng-chat-users li > .icon-wrapper { float: left; margin-right: 5px; border-radius: 25px; } #ng-chat-users li > strong { float: left; line-height: 30px; font-size: 0.8em; max-width: 57%; max-height: 30px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; } #ng-chat-users li > .ng-chat-user-status { float: right; } .ng-chat-user-status.online { background-color: #92A400; } .ng-chat-user-status.busy { background-color: #F91C1E; } .ng-chat-user-status.offline { background-color: #BABABA; } .ng-chat-user-status { border-radius: 25px; width: 8px; height: 8px; margin-top: 10px; } /*** chat window ***/ .ng-chat-window { right: 260px; height: 360px; z-index: 999; bottom: 0; position: fixed; width: 300px; border: 1px solid #A3A3A3; border-bottom: 0; -webkit-box-shadow: 0 4px 8px rgba(0,0,0,.25); box-shadow: 0 4px 8px rgba(0,0,0,.25); } .ng-chat-title > strong { font-weight: 600; display: block; overflow: hidden; height: 30px; text-overflow: ellipsis; white-space: nowrap; max-width: 85%; float: left; } .ng-chat-title > .ng-chat-user-status { float: left; margin-left: 5px; } .ng-chat-close { color: #5C5C5C; text-decoration: none; float: right; } .ng-chat-window .ng-chat-messages { padding: 10px; height: calc(90% - 30px); -webkit-box-sizing: border-box; box-sizing: border-box; position: relative; overflow: auto; background-color: #FFF; } .ng-chat-window .ng-chat-messages .ng-chat-message { clear: both; } .ng-chat-window .ng-chat-messages .ng-chat-message > span { float: right; width: 65%; padding: 0; margin-top: 0; background-color: #E3E3E3; border-radius: 5px; padding: 10px; margin-top: 0; margin-bottom: 5px; font-size: 0.9em; word-wrap: break-word; } .ng-chat-window .ng-chat-messages .ng-chat-message > img, .ng-chat-window .ng-chat-messages .ng-chat-message > .icon-wrapper { position: absolute; left: 10px; border-radius: 25px; } .ng-chat-window .ng-chat-messages .ng-chat-message.ng-chat-message-received > span { float: left; margin-left: 40px; padding-top: 7px; padding-bottom: 7px; background-color: #FFF; border: 3px solid #E3E3E3; margin-top: 0; margin-bottom: 5px; } .ng-chat-window  input { font-size: 0.8em; -webkit-box-sizing: border-box; box-sizing: border-box; padding: 0 5px; display: block; height: 35px; width: 100%; border: none; border-top: 1px solid #A3A3A3; } span.un-read-message { border-radius: 50%; padding: 3px 6px; background: #92a401; color: white; font-size: 9px; } ']
                    },] },
        ];
        /** @nocollapse */
        MainComponent.ctorParameters = function () { return []; };
        MainComponent.propDecorators = {
            "peoples": [{ type: core.Input },],
            "current_user_id": [{ type: core.Input },],
            "my_env": [{ type: core.Input },],
            "beforeSend": [{ type: core.Output },],
            "afterSend": [{ type: core.Output },],
            "afterUserSelect": [{ type: core.Output },],
        };
        return MainComponent;
    }());

    var SearchPipe = /** @class */ (function () {
        function SearchPipe() {
        }
        SearchPipe.prototype.transform = function (value, key, term) {
            return value.filter(function (item) {
                if (item.hasOwnProperty(key)) {
                    if (term) {
                        var regExp = new RegExp('\\b' + term, 'gi');
                        return regExp.test(item[key]);
                    }
                    else {
                        return true;
                    }
                }
                else {
                    return false;
                }
            });
        };
        SearchPipe.decorators = [
            { type: core.Pipe, args: [{
                        name: 'searchPipe',
                    },] },
        ];
        return SearchPipe;
    }());

    var ChatModule = /** @class */ (function () {
        function ChatModule() {
        }
        ChatModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule
                        ], exports: [
                            MainComponent
                        ],
                        declarations: [MainComponent, SearchPipe]
                    },] },
        ];
        return ChatModule;
    }());

    exports.ChatModule = ChatModule;
    exports.server = server;
    exports.web_socket_url = web_socket_url;
    exports.MyWebSocketService = MyWebSocketService;
    exports.MainComponent = MainComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
