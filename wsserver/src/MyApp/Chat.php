<?php

namespace MyApp;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface {

    protected $clients;
    protected $users;
    protected $online_users;


    public function __construct() {
        $this->clients = new \SplObjectStorage;
        $this->users = [];
        $this->online_users = [];

        echo "Congratulations! the server is now running\n";
    }

    public function onOpen(ConnectionInterface $conn) {
        
        // Store the new connection to send messages to later
        
        $querystring = $conn->WebSocket->request->getQuery();
        $my_parms = $querystring->toArray();

        $this->clients->attach($conn);
        $this->users[$conn->resourceId] = array_merge(['conn'=>$conn],$my_parms);
        $this->online_users[$my_parms['my_id']] = $conn->resourceId;

/*       //****** temp methods ********  ***/
        //need to store resource id and user id to table connections
        //and get online friends list
        //then notify im online to my friends

        foreach ($this->clients as $client) {
            if ($conn->resourceId!=$client->resourceId) {
                // The sender is not the receiver, send to each client connected
                $msg = json_encode(['type'=>'new-join','status'=>true,'msg'=>$my_parms['my_id']]);
                $client->send($msg);
            }
        }


        echo "New connection! ({$conn->resourceId})\n";

    }

    public function onMessage(ConnectionInterface $from, $msg) {
        /*
        $numRecv = count($this->clients) - 1;
        echo sprintf('Connection %d sending message "%s" to %d other connection%s' . "\n"
                , $from->resourceId, $msg, $numRecv, $numRecv == 1 ? '' : 's');

        foreach ($this->clients as $client) {
            if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send($msg);
            }
        }
        */
       
       $msg = json_decode($msg);
       if($msg->type=='subscribe')
       {
            $re  = $this->userIdToResourceId($msg->to_id);
            if($re !=false)
            {
                $status = true;
            }
            else
                $status = $re = false;

            $re = json_encode(['type'=>'subscribe','status'=>$status,'msg'=>$re]);

            $this->users[$from->resourceId]['conn']->send($re);
       }
       elseif ($msg->type=='message') {
           
           $re  = $this->userIdToResourceId($msg->to_id);
           //echo 'user-id'.$msg->to_id.'---res:'.$re;
            if($re !=false)
            {
                $status = true;
                $msg = json_encode(['type'=>'message',
                    'status'=>$status,
                    'my_id'=>$msg->my_id,
                    'to_id'=>$msg->to_id,
                    'msg'=>$msg->message]);
                if(isset($this->users[$re]['conn']))
                $this->users[$re]['conn']->send($msg);
            }

       }
       elseif($msg->type == 'exit')
       {
            $this->onClose($from);
       }
    }

    public function onClose(ConnectionInterface $conn) {
        // The connection is closed, remove it, as we can no longer send it messages
        
        $my_id = $this->resourceIdToUserId($conn->resourceId);
        if($my_id!=false){

            foreach ($this->clients as $client) {
                if ($conn->resourceId!=$client->resourceId) {

                    $msg = json_encode(['type'=>'friend-exit','status'=>true,'msg'=>$my_id]);
                    $client->send($msg);
                }
            }
            $this->clients->detach($conn);

            unset($this->users[$conn->resourceId]);

            echo "Connection {$conn->resourceId} has disconnected\n";

        }
    }

    public function onError(ConnectionInterface $conn, \Exception $e) {
        echo "An error has occurred: {$e->getMessage()}\n";

        $conn->close();
    }



    //**** private methods ******/
    
    private function userIdToResourceId($user_id)
    {
        if(isset($this->online_users[$user_id]))
            {
                return  $this->online_users[$user_id];
            }
            else
                return false;
    }

    private function resourceIdToUserId($resource_id)
    {
        if(isset($this->users[$resource_id]))
        {
            return $this->users[$resource_id]['my_id'];
        }
        else
            return false;
    }
}