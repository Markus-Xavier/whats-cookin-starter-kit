export default class FormHandler {
  constructor(dataManager) {
    this.dataManager = dataManager;
  }

  sortUserSearch(listOfWords) {
    return listOfWords.reduce((sortedWords, word) => {
      if (this.dataManager.tags.indexOf(word.toUpperCase()) > -1) {
        sortedWords.tags.push(word.toLowerCase());
      } else {
        sortedWords.keyWords.push(word.toLowerCase());
      }
      return sortedWords;
    }, {
      tags: [],
      keyWords: [],
    });
  }
}