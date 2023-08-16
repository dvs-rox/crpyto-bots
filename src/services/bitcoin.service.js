// import { fs } from 'fs'
import axios from "axios"
export const bitcoinService = {
    getRate,
    getMarketPrice,
}

async function getMarketPrice() {
    const res = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
    return res.data
}
async function getRate(coins) {
    // const res = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    // return res.data
}