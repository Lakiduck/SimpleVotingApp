import { createClient } from 'redis';
import 'dotenv/config';

var submitVote = async function(vote){
    var urlString = "redis://" + process.env.REDIS_IP + ":" + process.env.REDIS_PORT
    
    const client = createClient({
        url: urlString
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