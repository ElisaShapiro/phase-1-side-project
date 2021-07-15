document.addEventListener('DOMContentLoaded', () => {
    fetchJokes()
    renderAside()
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
            if (pPunchline.style.display !== "block") {
                pPunchline.style.display = "block";
            } else {
                pPunchline.style.display = "none";
            }
        })
        // let formReview = document.createElement("form")
        // let inputReview = document.createElement("input")
        // let btnReview = document.createElement("button")
        // let ulReview = document.createElement("ul")
        // // ulReview.appendChild(formReview, inputReview, btnReview)
        // ulReview.className = "jokeReview"
        // formReview.className = "jokeReview"
        // inputReview.className = "jokeReview"
        // btnReview.className = "jokeReview"
        // inputReview.placeholder = "Notes about this joke"
        // btnReview.textContent = "Add Notes"
        // divContainer.append(formReview, inputReview, btnReview, ulReview)
        // // console.log(jokeReview.value)
        // btnReview.addEventListener('submit', (e) => {
        //     e.preventDefault()
        //     let liReview = document.createElement("li")
        //     console.log(inputReview)
        //     liReview.textContent = inputReview.value //inputReview.jokeReview
        //     ulReview.appendChild(liReview)
        //     inputReview.value = ""
        // })
        document.querySelector("#joke-container").append(divContainer)
    })
}
function renderAside(){
    let formSetlist = document.createElement("form")
    let inputSetlist = document.createElement("input")
    let btnSetlist = document.createElement("button")
    let ulSetlist = document.createElement("ul")
    formSetlist.className = "jokeSetlist"
    inputSetlist.className = "jokeSetlist"
    btnSetlist.className = "jokeSetlist"
    ulSetlist.className = "jokeSetlist"
    inputSetlist.placeholder = "Notes for Setlist"
    btnSetlist.textContent = "Add Notes"
    btnSetlist.addEventListener('submit', (e) => {
        e.preventDefault()
        let liSetlist = document.createElement("li")
        liSetlist.textContent = inputSetlist.value
        ulSetlist.appendChild(liSetlist)
        inputSetlist.value=""
    })
    document.querySelector("#setlist-notes").append(formSetlist, inputSetlist, btnSetlist, ulSetlist)
}