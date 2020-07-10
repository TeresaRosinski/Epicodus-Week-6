export async function getCurrencyData() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`);
    let currencyData;
    if (response.ok && response.status == 200) {
      currencyData = await response.json();
    } else {
      currencyData = false;
      alert('The api call was unsuccessful');
      console.log(response);
    }
    return currencyData;
  } catch(error) {
    console.log("error: " + error); 
    alert(error); 
    return false;
  }
}


export function checkCurrency(currencyData, currencyToConvertTo){
  if (currencyData && currencyData.conversion_rates[currencyToConvertTo]){
    return true;
  } else {
    alert("The api call was unsuccessful, refresh the page and try again.");
    return false;
  }
}

export function currencyConversion (currencyData, inputtedAmount, currencyToConvertTo) {
  if(checkCurrency(currencyData, currencyToConvertTo) === true){
  let convertRatio = currencyData.conversion_rates[currencyToConvertTo];
  let calculatedConversion = inputtedAmount * convertRatio;
  return calculatedConversion; 
  } else {
    console.log("That currency no longer exists");// isn't this the alert that I need?
    alert("That currency no longer exists in this database");
  }
}
