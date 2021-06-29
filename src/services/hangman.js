// const url = ``
// console.log(url)
export default class DinoHangman {
  static dinoIpsum(paragraph, word) {
    return fetch(`http://dinoipsum.herokuapp.com/api/?format=json&paragraphs=${paragraph}&words=${word}`)
      .then(function(response) {
        if (!response.ok) {
          throw Error(response.statusText);
      }
        return response.json();
    })
      .catch(function(error) {
        return Error(error);
    });
  }
}
