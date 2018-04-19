import { OnInit, EventEmitter } from '@angular/core';
export declare class MainComponent implements OnInit {
    peoples: any;
    current_user_id: number;
    my_env: any;
    beforeSend: EventEmitter<any>;
    afterSend: EventEmitter<any>;
    afterUserSelect: EventEmitter<any>;
    private selected_people;
    private is_collapse;
    private is_collapse2;
    private _my_web_soket;
    private message;
    constructor();
    ngOnInit(): void;
    collapseIt(target: any): void;
    peopleOnclick(index: any): void;
    closeChat(): void;
    sendMessage(): void;
    doSendMessage(message: any): void;
}
