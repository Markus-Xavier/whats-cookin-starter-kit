import FormHandler from "./FormHandler";
export default class FormManager {
  constructor(formName, callBack) {
    this.form = document.querySelector(`form[name="${formName}"]`);
    this.formHandler = new FormHandler({ tags: ['dog', 'bird'], keyWords: ['cat'] });
    this.callBack = callBack;
    this.initialize();
  }

  initialize() {
    this.form.onsubmit = this.submitEvent.bind(this);
  }

  reset() {
    this.form.reset();
  }

  submitEvent(event) {
    event.preventDefault();
    let searchQuery = '';

    for (const pair of new FormData(event.target)) {
      const filteredString = pair[1].replace(/[^a-z]/gi, ' ');
      searchQuery += ' ' + filteredString;
    }

    const sortedSearch = this.formHandler.sortUserSearch(searchQuery.split(' '));
    this.callBack(sortedSearch);
    return false;
  }
}