const username = "";
const password = "";

const prompt = require('prompt-sync')();
const trade = require('wstrade-api');
const fs = require('fs');

async function login(){

    //login attempt to prompt the otp email
    try {
        await trade.auth.login(username, password).catch();
    } catch (error) {
    }
 
    const otp = prompt('enter your one-time password: ');
    trade.auth.on("otp", otp)

    let fail = false;
    await trade.auth.login(username, password).catch((err) => fail = true);
    if (fail) {
        console.log("something went wrong, try again");
        return -1;
    }
    
    let data = JSON.stringify( trade.auth.tokens(), null, 4);

    fs.writeFile('token.json', data, (err) => {
        if (err) throw err;
        console.log('Token stored in token.json');
    });

}

login()
