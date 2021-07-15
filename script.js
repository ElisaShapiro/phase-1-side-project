document.addEventListener('DOMContentLoaded', () => {
    fetchJokes()
})

function fetchJokes(){
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(res => res.json())
    .then(data => oneJoke(data))
}

function oneJoke(joke){
    joke.forEach(joke => {
        let divContainer = document.createElement("div")
        let h4Setup = document.createElement("h4")
        let pPunchline = document.createElement("p")
        let btnPunchline = document.createElement("button")
        divContainer.id = "jokeContainerDiv"
        h4Setup.id = "setupLine"
        pPunchline.id = "punchlineLine"
        btnPunchline.id = "toggle"
        h4Setup.textContent = joke.setup
        btnPunchline.textContent = "Reveal Punchline"
        divContainer.append(h4Setup, btnPunchline, pPunchline)
        btnPunchline.addEventListener('click', (e) => {
            pPunchline.textContent = joke.punchline
            if (pPunchline.style.display !== "none") {
                pPunchline.style.display = "none";
            } else {
                pPunchline.style.display = "block";
            }
        })
        document.querySelector("#joke-container").append(divContainer)
    })
}