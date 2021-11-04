// ES6 syntax is used here. Please refer to the link below for importing
// wstrade-api in CommonJS:
// https://github.com/ahmedsakr/wstrade-api/docs#importing-wstrade-api-commonjs-es6


//https://github.com/ahmedsakr/wstrade-api/tree/main/docs

const trade = require('wstrade-api');
const fs = require('fs');
const util = require('./util')
const tokenFile = "./token.json";
const positionsFile = "ws-positions.json"

let ExchangeRates;

//let positions = [];

function profit(current_value, book_value, currency) {
    if (currency == 'CAD') {
        ret = {net: util.round(current_value - book_value),
             percent: (util.round(current_value / book_value)-1)*100}
    }else{
        //book value always CAD, current value in USD
        ret = {net: util.round(current_value * ExchangeRates.USD.buy_rate - book_value),
             percent: (util.round((current_value * ExchangeRates.USD.buy_rate) / book_value)-1)*100}
    }
    return ret;
}

class Positon {
    constructor(pos){
        this.currency = pos.currency;
        this.security_type = pos.security_type;

        //this.stock = pos.stock;
        this.symbol = pos.stock.symbol;
        this.name = pos.stock.name;
        this.exchange = pos.stock.primary_exchange;

        this.quantity = pos.quantity;
        this.book_value = pos.book_value.amount;

        this.price = Number(pos.quote.amount);
        this.update();
        this.initSector();
    }
    update(){
        this.current_value = util.round(this.quantity * this.price);
        this.profit = profit(this.current_value, this.book_value, this.currency);
        this.netProfit = this.profit.net;
        this.percentProfit = this.profit.percent;
    }
    initSector(){
        util.getSector(this).then((val) =>  this.sector = val);
    }
}

async function login(){
    //read from file
    let jsonString = fs.readFileSync(tokenFile)
    trade.auth.use(JSON.parse(jsonString));
    await trade.auth.refresh();
}


async function getPostions(){
    let positions = [];
    let personalPositionsList = []
    let openAccs = await trade.accounts.all();
    
    personalPositionsList.push(await trade.accounts.positions(openAccs.tfsa));
    personalPositionsList.push(await trade.accounts.positions(openAccs.crypto));
    personalPositionsList.push(await trade.accounts.positions(openAccs.personal));


    //make a set of stock symbols
    let stockSet = new Set();

    
    personalPositionsList.forEach(positionElement => {
        positionElement.forEach(element => {
            if (!stockSet.has(util.stockToString(element))) {
                positions.push(new Positon(element))
                stockSet.add(util.stockToString(element))
            }
            else{
                let index = positions.findIndex(entry => entry.exchange+":"+entry.symbol === util.stockToString(element));

                positions[index].book_value += element.book_value.amount;
                positions[index].quantity += element.quantity;
            }
            
        });
    });
    return positions;

    
}

async function main() {
    ExchangeRates = await trade.data.exchangeRates()
    console.log("Retrieving data");
    
    let positions = await getPostions();
 
    setTimeout(function () {
        let data = JSON.stringify(positions, null, 4);
        fs.writeFile(positionsFile, data, (err) => {
            if (err) throw err;
            console.log(`Data written to ${positionsFile}`);
        });
        
    },4000);
   
}

login();

main()

