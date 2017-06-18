
var ApiRoutes = function() {

    this.getFriends= function(request,response,friends) {

        response.json(friends);

    },

    this.postFriends= function(request,response,friends,newFriend) {

        var newFriendScore = newFriend.scores;
        var listDifference = [];

        for (var i=0;i<friends.length;i++) {

            var possibleMatchScore = friends[i].scores;

            listDifference.push(totalDifference(newFriendScore,possibleMatchScore));

        }

        var index = listDifference.indexOf(Math.min.apply(null, listDifference));
        //add this friend to our list
        friends.push(newFriend);
        response.json(friends[index]);

    }
};

function totalDifference(array1,array2) {

    var total = 0;
    for (var i =0;i<array1.length;i++) {
        total += Math.abs(array1[i] - array2[i]); 
    }

    return total;
}

module.exports = ApiRoutes;



