<!DOCTYPE html>
<html>
    <head>
        <title>WebSocket PHP Open Group Chat App</title>
        <link type="text/css" rel="stylesheet" href="style.css" />
        <script src="websocket_client.js"></script>
    </head>
    <body onload="javascript:WebSocketSupport()">
        <div id="ws_support"></div>

        <div id="wrapper">
            <div id="menu">
                <h3 class="welcome">Welcome to WebSocket PHP Open Group Chat App v1</h3>
            </div>

            <div id="chatbox"></div>

            <div id ="controls">
                <label for="name"><b>Name</b></label>
                <input name="chatname" type="text" id="chatname" size="67" placeholder="Type your name here"/>
                <input name="msg" type="text" id="msg" size="63" placeholder="Type your message here" />
                <input name="sendmsg" type="submit"  id="sendmsg" value="Send" onclick="doSend(document.getElementById('msg').value)" />
            </div>
        </div>
    </body>
</html>