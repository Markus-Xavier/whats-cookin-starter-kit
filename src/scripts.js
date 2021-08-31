import './styles.css';
//import apiCalls from './apiCalls';
import FormManager from './classes/FormManager'

const logToConsole = (queryArray) => {
  // console.log(queryArray);
};

new FormManager('recipe-search', logToConsole);
