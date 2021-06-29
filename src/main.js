import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import DinoHangman from './hangman.js';
import DinoHangman from './services/hangman.js';
import $ from 'jquery';


DinoHangman
let request = new XMLHttpRequest();
const url = `http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=1&words=5`

request.onreadystatechagne = function() {
  if (this.status === 200) {

  }
}