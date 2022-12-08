const requestUrl = fetch(`https://rickandmortyapi.com/api/character`).then(
  (res) => res.json()
);
console.log(requestUrl);
