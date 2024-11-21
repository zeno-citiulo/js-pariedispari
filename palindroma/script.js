//1.creao la funzione che gira la parola e la restituisce girata
//2.Salvo la parola dell'utente in una variabile
//3.confronto la parola generata e l'output

const word = prompt('Scrivi una parola').toLowerCase()
let message;

if(word === wordReverse(word)){
  message = 'La parola è palindroma'
} else{
  message = 'La parola non è palindroma'
}

console.log(message);

function wordReverse(word){
  let wordReversed = '';
  for(let i = word.length - 1; i >= 0; i--){
    wordReversed += word[i]
  }
  return wordReversed;
}