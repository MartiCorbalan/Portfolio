let contentPath = './assets/contenidoCAT.json';
fetch(contentPath)
    .then(response => response.json())
    .then(data => {
        createMenu(data.menu);
    })

// que los LI salgan por js json

function createMenu(menu){
    const navbar = document.getElementById("nav");
    const ul = document.createElement('ul');
    navBar.innerHTML = "";
    ul.innerHTML = "";
   for(let i=0; i>=menu.lenght; i++ ){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = menu[i]
   }
}