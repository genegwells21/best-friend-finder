var friends = require("../data/friends.js");
module.exports = function(app)  {
    app.get("/api/friends", function(req, res)  {
    res.json(friends);
});

app.post("/api/friends", function(req, res)   {
    var idealMatch =    {
        name: "",
        photo: "",
        friendDifference: 1000
};
    var userData = req.body;
    var userScores = userData.scores;
    var totalDifference;

for (var i = 0; i <friends.length; i++) {
    var currentFriend = friends[i];
    var totalDifference = 0;

for (var j = 0; j <currentFriend.scores.length; j++)    {
    var currentFriendsScore = currentFriend.scores[j];
    var currentUserScore = userScores[j];

    totalDifference =+ Math.abs(parseInt(currentScore) - parseInt(currentFriendScore));
}

if (totalDifference <= bestMatch.friendDifference)  {
    bestMatch.name = currentFriend.name;
    bestMatch.photo = currentFriend.photo;
    bestMatch.friendDifference = totalDifference;
}
}

friends.push(userData);

res.json(bestMatch);
});
};