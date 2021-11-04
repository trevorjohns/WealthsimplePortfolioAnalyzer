const yahooFinance = require('yahoo-finance2').default;

function round(num) {
    return (Math.round((num + Number.EPSILON) * 100) / 100);
}

const percentSort = function (a, b) {
    return a.profit.percent - b.profit.percent;
}
const netSort = function (a, b) {
    return a.profit.net - b.profit.net;
}
const alphabetSort = function (a, b) {
    return a.stock.symbol > b.stock.symbol;
}
const currentValueSort = function (a, b) {
    return a.current_value - b.current_value;
}
const bookValueSort = function (a, b) {
    return a.book_value.amount - b.book_value.amount;
}

const sorter = {
    "percentGain" : percentSort,
    "netGain" : netSort,
    "alphabetical" : alphabetSort,
    "currentValue" : currentValueSort,
    "bookValue": bookValueSort
}

function stockEquals(stockA, stockB) {
    if (stockA.symbol === stockB.symbol && stockA.primary_exchange === stockB.primary_exchange) {
        return true;
    }
    else{
        return false;
    }
}

async function getSector(position) {
    
    if (position.security_type == "cryptocurrency") {
        return "Cryptocurrency"
    }
    if (position.security_type == "exchange_traded_fund") {
        return "ETF"
    }
    
    let yahooSymbol = position.symbol;
    yahooSymbol = yahooSymbol.replace(".",  "-");
    
    if (position.exchange == "TSX") {
        yahooSymbol += ".TO";
    }
    if (position.exchange == "TSX-V"){
        yahooSymbol += ".V";
    }
    let res;
    try {
        res = await yahooFinance.quoteSummary(yahooSymbol, { modules: [ "assetProfile" ] });
    } catch (error) {
    }
    if (res) {
        return res.assetProfile.sector;
    }
    console.log(yahooSymbol);
    return null;
  }
  
function stockToString(pos) {
    return pos.stock.primary_exchange + ":" + pos.stock.symbol;
}

exports.sorter = sorter;
exports.round = round;
exports.stockEquals = stockEquals;
exports.getSector = getSector;
exports.stockToString = stockToString;
