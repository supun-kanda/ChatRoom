# ChatRoom
This app is made for demonstrating the usage of WebSockets in a very simple manner

BackEnd is on nodejs
you have to install ws module using
```
npm i ws
```

Default port where the server runs is port, 5000 you can change it on ChatRoom/Server/Server.js
You have to change the port which listens on port 5000 as well on ChatRoom/Client/app.js

Run the server using
```
node server.js
```
You can access the front-end using ChatRoom/Client/index.html opening from a web browser. Using in the localmachine; You can the test using different tabs on browser.

## If you wishes to extend
I have used google cloud server. So I cofigured port forwarding when i log in
```
ssh -L 5000:localhost:5000 -i PathToLocalRSAKey userName@publicIP
```
then run the server on the google cloud machine using previous server command

Then you can open local file index.html on your browser. Also, anyone in a different network can join same chatroom using the same ssh to log, and just using index.html.

## Dependencies
 - npm 6.8.0
 - node v8.10.0

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
