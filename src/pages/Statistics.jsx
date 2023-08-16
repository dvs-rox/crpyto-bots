import { Chart } from "../components/Chart";
import { useEffect, useState } from "react";
import { bitcoinService } from "../services/bitcoin.service";
export function Statistics() {
    const [marketPrice, setMarketPrice] = useState([]);
    useEffect(() => {
        getMarketPrice()
    }, [])
    async function getMarketPrice() {
        const marketPrice = await bitcoinService.getMarketPrice();
        const marketPriceData = marketPrice.values.map(value => value.y);
        setMarketPrice(marketPriceData);
    }
    return (
        <section className="statistics">
            <h1>Statistics</h1>
            <Chart data={marketPrice} title={'Bitcoin Market Price Over Time'} color="gold"/>
        </section>
    )
}