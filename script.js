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
        // let pPunchline = document.createElement("p")
        divContainer.id = "jokeContainerDiv"
        h4Setup.id = "setupLine"
        // pPunchline.id = "punchlineLine"
        h4Setup.textContent = joke.setup
        // pPunchline.textContent = joke.punchline
        
        divContainer.append(h4Setup, pPunchline)
        document.querySelector("#joke-container").append(divContainer)
    })
}