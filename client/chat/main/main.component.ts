import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs";
import { MyWebSocketService } from '../my-web-socket.service';
// import {EventSourcePolyfill} from 'ng-event-source';
import { People } from './people.type';
import * as env from '../env';
@Component({
  selector: 'my-chat',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  @Input() peoples:Array<People>;
	@Input() current_user_id:number;
	private selected_people : People;
  private is_collapse:boolean;
	private is_collapse2:boolean;
  private _my_web_soket;
  private message:any;


  constructor() { 
  	this.is_collapse = false;
    
  }

  ngOnInit() {
    this._my_web_soket =  new MyWebSocketService(env.web_socket_url,'?my_id='+this.current_user_id);


    this._my_web_soket.componentMethodCalled$.subscribe(
        (data) => {
          if(data.type=='new-join')
          {
            this.peoples.map((people)=>{
              if(people.id==parseInt(data.msg))
              {
                people.status = 'online';
              }
              return people;
            })
            //console.log(this.peoples);
          }
          else if(data.type=='friend-exit')
          {
            this.peoples.map((people)=>{
              if(people.id==parseInt(data.msg))
              {
                people.status = 'offline';
              }
              return people;
            })
          }
          else if(data.type=='message'){
            let from_id = parseInt(data.my_id);

            this.peoples.map((people)=>{
              if(people.id==from_id)
              {
                people.messages.push(
                {
                  status : 'received',
                  type : 'received',
                  msg : data.msg
                });

                if(this.selected_people==undefined || this.selected_people.id!=from_id)
                {
                  if(people.unread_message_count!=undefined)
                    people.unread_message_count = people.unread_message_count+1;
                  else
                    people.unread_message_count = 1;
                }
              }
              return people;
            });

          }

        }
      );
  }

  collapseIt(target)
  {
  	this[target] == true ? this[target]=false : this[target]=true;
  }

  peopleOnclick(index)
  {

    this.selected_people = this.peoples[index];
    this.selected_people.unread_message_count = undefined;
    if(this.selected_people.status=='online'){
      this._my_web_soket.doSend(

        JSON.stringify({'type':'subscribe',
        'my_id':this.current_user_id,
        'to_id':this.selected_people.id
      }));

    }


  }

  closeChat()
  {
    /*
    this._my_web_soket.doSend(

      JSON.stringify({'type':'exit',
      'my_id':this.current_user_id
    }));
    */

    this.selected_people = undefined;
  }

  sendMessage()
  {
    if(this.message != ''){
      //alert('hai');
      this._my_web_soket.doSend(

          JSON.stringify({'type':'message',
          'my_id':this.current_user_id,
          'to_id':this.selected_people.id,
          'message' : this.message
        }));

      this.selected_people.messages.push({
        status : 'sent',
        type : 'sent',
        msg : this.message
      });

      this.message = '';
    }

  }




}
