var friends = require("../data/friends.js");
module.exports = function(app)  {
    app.get("/api/friends", function(req, res)  {
    res.json(friends);
});

app.post("/api/friends", function(req, res)   {
    var pointDifference = 0;
    var idealMatch =    {
        name: "",
        photo: "",
        friendDifference: 1000
};
    var userData = req.body;
    var userData = userData.name;
    var userScores = userData.scores;
    var b = userScores.map(function(item)   {
    return parseInt(item, 10);
});
userData = {
    name: req.body.name,
    photo: req.body.photo,
    scores: b
    };
console.log("Name:" + userName);
console.log("User score" + userScores);
var sum = b.reduce(a, b) => a + b, 0);
console.log("Sum of users score" + sum);
console.log("Best Match Friend Diff" + idealMatch.friendDifference);
console.log("++++++++++++++=========================================");


        for (var i = 0; i < friends.length; i++)    {
            console.log(friends[i].name);
            friendDifference = 0;
            console.log("Total Diff" + pointDifference);
            console.log("Best match friend diff" + idealMatch.friendDifference);

            var bfriendScore = friends[i].scores.reduce(a,b) => a+b, 0);
            console.log("total friend score" + bfriendScore);
            totalDifference += Math.abs(sum - bfriendScore);
            console.log("------------------------------>" + pointDifference);

            if(friendDifference <= idealMatch.friendDifference) {
                idealMatch.name = friends[i].name;
                idealMatch.photo = friends[i].photo;
                idealMatch.friendDifference = pointDifferenc;
            }
            console.log(pointDifference + "Point Difference");
            }
            console.log(idealMatch);
            friends.push(userData);
            console.log("New User Implemented");
            console.log(userData);
            res.json(idealMatch)
    });
};