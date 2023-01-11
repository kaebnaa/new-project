const field = document.querySelector(".cards");

function renderCard(){
    hereos.forEach( e => {
        field.innerHTML += `
            <div class="card" >
                <img src="${e.image}" alt="" width="100%" height="70%">
                <p>Name: ${e.name}</p>
                <p>Real Name: ${e.realname}</p>
                <p>Species: ${e.species }</p>
                <button onclick="window.open('${e.href}')">Link</button>
            </div>
        `
    })
}
renderCard();
