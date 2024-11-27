import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi('fca_live_tsd3ctzCmZh5AwD5iSYoBe3GVOG2OnY53gUdD0Qo');

export async function convertCurrency(fromCurrency, toCurrency, units) {
   const response = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency 
    });
    const multiplier = response.data[toCurrency];
    return multiplier*units; 
}

