export async function getCurrencyData() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`);
    let currencyData;
    if (response.ok && response.status == 200) {
      currencyData = await response.json();
    } else {
      currencyData = false;
      console.log(response);
    }
    console.log(currencyData);
    return currencyData;
  } catch(error) {
    console.log(error)
    return false;
  }
}

export function checkCurrency(currencyData, currencyToConvertTo){
  if (currencyData.conversion_rates[currencyToConvertTo]){
    return true;
  } else {
    return false;
  }
}

export function currencyConversion (currencyData, inputtedAmount, currencyToConvertTo) {
  console.log(currencyData);
  if(checkCurrency(currencyData, currencyToConvertTo) === true){
  let convertRatio = currencyData.conversion_rates[currencyToConvertTo];
  let calculatedConversion = inputtedAmount * convertRatio;
  return calculatedConversion; 
  } else {
    console.log("That currency no longer exists");
    alert("That currency no longer exists in this database");
  }
}
