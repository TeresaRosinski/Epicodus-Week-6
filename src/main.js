
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { getCurrencyData, currencyConversion } from './project.js';



$(document).ready(function(){
  $("#changeMoney").click(async function(){
    console.log("lol");
    const jsonObject = await getCurrencyData();
    const inputtedAmount = $("input#originalAmount").val();
    const currencyToConvertTo = $("#currencies").val();
    let amountToShow = currencyConversion(jsonObject, inputtedAmount, currencyToConvertTo);
    $("#output").text(amountToShow);
    event.preventDefault();
  });

});



