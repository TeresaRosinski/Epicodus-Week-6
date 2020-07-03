
export async function getCurrencyExchange() {
  try {
    let response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/usd`)
    let jsonifiedResponse;
    if (response.ok && response.status == 200) {
      jsonifiedResponse = await response.json();
    } else {
      jsonifiedResponse = false;
    }
    return jsonifiedResponse;
  } catch(error) {
    return false;
  }
}


// second way to get api data
export function getJSON (url){
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = () => {  //onload ever will run when callback is executed?
    if(xhr.status === 200){
      let data = JSON.parse(xhr.responseText);
      console.log(data);
    }
  };
  xhr.send();
}