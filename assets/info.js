fetch('https://swapi.info/api')
    .then((response) => response.json())
    .then((json) => console.json(json)[0])
    .catch((error) => console.error.json(error))

// que los LI salgan por js json
