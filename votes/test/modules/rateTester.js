import os from 'node:os';

/*Count is number of requests per minute
if count=10, then the get request should be
executed every 6 seconds etc.
duration should be specified in milliseconds*/
var getReq = async function(url, count, duration){

    var resStatus;
    let delay = 60000 / count;

    async function getCallBack(url){
        const response = await fetch(url , {
            method: "GET"
        });
        resStatus = response.status;
        console.log(os.hostname());
    }

    let id = setInterval(getCallBack, delay, url);

    var result = new Promise((resolve) => {
        setTimeout(() => {
            clearInterval(id);
            resolve(resStatus);
        }, duration);
    });

    return result;
    
}

export default getReq;

//var thing = await getReq("http://localhost:3000/", 100, 60000);

//console.log(thing);