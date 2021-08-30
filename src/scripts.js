import './styles.css';
import apiCalls from './apiCalls';
import FormManager from './classes/FormManager.js'

const searchHandler = (event) => {
    event.preventDefault();
    const userSearch = {
    };

    for(const pair of new FormData(event.target)) {
        userSearch[pair[0]] = pair[1];
    }
    console.log(userSearch);
    return false;
};

new FormManager('recipe-search', searchHandler);








console.log('Hello world');
