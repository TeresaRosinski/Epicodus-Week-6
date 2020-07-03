export async function getCurrencyData() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`);
    let currencyData;
    if (response.ok && response.status == 200) {
      currencyData = await response.json();
    } else {
      currencyData = false;
    }
    console.log(currencyData);
    return currencyData;
  } catch(error) {
    return false;
  }
}

export function currencyConversion (currencyData, inputtedAmount, currencyToConvertTo) {
  //math = amount inputted * currency 
  console.log(currencyData);
  let convertRatio = currencyData.conversion_rates[currencyToConvertTo];
  let calculatedConversion = inputtedAmount * convertRatio;
  return calculatedConversion; 
}