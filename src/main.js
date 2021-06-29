import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoHangman from './services/hangman.js';
import $ from 'jquery';


// DinoHangman

$(document).ready(function() {
  $('#submit').click(function() {
    let paragraphNumber = $('#paragraph').val();
    console.log(paragraphNumber);
    let wordNumber = $('#word').val();
    console.log(wordNumber);
    let x = DinoHangman.dinoIpsum(paragraphNumber, wordNumber)
    .then(function(response){
    
    console.log(response)
    $('.story').text(response);
    })

    console.log(x);
  });
});