
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {getJSON, getCurrencyExchange } from './projects.js';

$(document).ready(function(){

});

function generateHTML(data){
  const section = document.createElement('section');
  peopleList.appendChild(section);
  section.innerHTML = `
    <img src = ${data.thumbnail.source}>
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <p>${data.extract}</p>`
}

//first call getJson function
getJSON(apiPractice);