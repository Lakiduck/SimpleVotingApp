import { createClient } from 'redis';

var submitVote = async function(vote){
    const client = createClient({
        url: 'redis://127.0.0.1:6379'
    });
    client.on('error', err => console.log('Redis Client Error', err));

    await client.connect();
    
    await client.ZINCRBY("player", 1, vote);

    var range = await client.ZRANGE("player", '+inf', '-inf', {BY: 'SCORE', REV: true});

    var playerScoreString = ""; 

    for (var player of range) {
        var score = await client.ZSCORE("player", player);
        //console.log(player + ": " + score);
        if (range.indexOf(player) < (range.length - 1)){    
            playerScoreString = playerScoreString + "\"" + player + "\"" + ": " + score + ", "
        } else {
            playerScoreString = playerScoreString + "\"" + player + "\"" + ": " + score
        }
    };

    //console.log(playerScoreString);

    var playerScoreJSON = JSON.parse("{ " + playerScoreString + " }");

    //console.log(playerScoreJSON);

    await client.disconnect();

    return playerScoreJSON;
    
}

export default submitVote;