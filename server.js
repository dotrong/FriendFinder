var express = require('express');
var bodyParser = require('body-parser');
var path = require("path");
var HtmlRoutes = require('./app/routing/htmlRoutes.js');
var ApiRoutes = require('./app/routing/apiRoutes.js');

var PORT = process.env.PORT||3000;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var htmlRoute1 = new HtmlRoutes();
var apiRoute1  = new ApiRoutes();
var friends = require('./app/data/friends.js');

app.get("/",function(request,response) {
    htmlRoute1.home(request,response);
});

app.get("/survey",function(request,response) {

    htmlRoute1.survey(request,response);
});

app.get("/api/friends", function(request,response){

    apiRoute1.getFriends(request,response,friends);
});

app.post("/api/friends",function(request,response){

    var newFriend = request.body;

    apiRoute1.postFriends(request,response,friends,newFriend);
    
});

app.listen(PORT,function() {

    console.log("App listening on port " + PORT);

})
