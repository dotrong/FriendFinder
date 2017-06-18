var path = require("path");
var HtmlRoutes =  function() {

    this.survey = function(request,response) {

        response.sendFile(path.join(__dirname, "../public/survey.html"));
       
    };

    this.home = function(request,response) {

       response.sendFile(path.join(__dirname, "../public/home.html"));

    };
};

module.exports = HtmlRoutes;







