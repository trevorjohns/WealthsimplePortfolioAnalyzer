export class Position {
    id: number;
    currency: string;
    securityType: string;
    quantity: number;
    bookValue: number;
    dollarProfit: number;
    percentProfit: number;
    sector: string;
    currentValue: number;
    price: number;
    symbol: string;
    name: string;
    exchange: string;
    description: string;

    constructor(pos: any){
        //this.id = pos.id;
        this.currency = pos.currency;
        this.securityType = pos.securityType;

        this.symbol = pos.stock.symbol;
        this.name = pos.stock.name;
        this.exchange = pos.stock.primary_exchange;
        this.description = pos.stock.description;

        this.quantity = pos.quantity
        this.bookValue = pos.book_value.amount;

        this.price = pos.price;
        this.currentValue = pos.current_value;

        this.dollarProfit = pos.profit.net;
        this.percentProfit = pos.profit.percent;

        this.sector = pos.sector;
    }
}

