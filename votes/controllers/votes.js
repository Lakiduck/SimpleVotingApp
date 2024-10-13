import { createClient } from 'redis';
import 'dotenv/config';

var submitVote = async function(vote){
    //Had to change env var from REDIS_PORT to DB_CACHE_PORT as when it tried to select REDIS_PORT it gave the follow redis://<ip>:tcp://<ip>:6379 for my k8s implementation
    //Env var selector was a bit iffy, think it's a bug with dotenv/config
    //this didn't happen with docker compose deploy, unsure why
    var urlString = "redis://" + process.env.REDIS_IP + ":" + process.env.DB_CACHE_PORT

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