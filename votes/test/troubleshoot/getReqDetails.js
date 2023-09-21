import 'dotenv/config';

const URI = "http://" + process.env.VOTING_SERVICE_IP + ":3000/req";

async function getReqRespose(url){
    const response = await fetch(url , {
        method: "GET"
    });
    console.log(response);
}

getReqRespose(URI);
getReqRespose(URI);
getReqRespose(URI);
getReqRespose(URI);
getReqRespose(URI);
