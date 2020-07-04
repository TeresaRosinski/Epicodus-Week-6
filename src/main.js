
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getCurrencyData, currencyConversion } from './project.js';



$(document).ready(function(){
  $("#changeMoney").click(async function(){
    const jsonObject = await getCurrencyData();
    const inputtedAmount = $("input#originalAmount").val();
    const currencyToConvertTo = $("#currencies").val();
    let amountToShow = currencyConversion(jsonObject, inputtedAmount, currencyToConvertTo);
    let display = `$ ${inputtedAmount} USD converts to ${amountToShow} ${currencyToConvertTo}.`;
    $("#output").text(display);
    event.preventDefault();
  });

});



