<?php

use Ratchet\Server\IoServer;
use Ratchet\Http\HttpServer;
use Ratchet\WebSocket\WsServer;
use MyApp\Chat;

require dirname(__DIR__) . '/vendor/autoload.php';

$server = IoServer::factory(
    new HttpServer(
        new WsServer(
            new Chat('stopCallback')
        )
    ),
    $this->port()
);

$server->run();

echo "if the server ever determines it should close, this will be printed.";


// when loop completed, run this function
function stopCallback() {
    $server->loop->stop();
}