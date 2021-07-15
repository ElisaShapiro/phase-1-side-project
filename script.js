document.addEventListener('DOMContentLoaded', () => {
    fetchJokes()
    renderAside()
    document.querySelector("#add-joke-form").addEventListener('submit', (e) => {
        e.preventDefault()
            let newJoke = {
                punchline: document.querySelector('#add-joke-form #punchline').value,
                setup: document.querySelector('#add-joke-form #setup').value,
            }
        console.log(newJoke)
        oneJoke(newJoke)
        }
    )
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
        let btnRemove = document.createElement('button')
        let btnEdit = document.createElement('button')
        divContainer.id = "jokeContainerDiv"
        h4Setup.id = "setupLine"
        pPunchline.id = "punchlineLine"
        btnPunchline.id = "toggle"
        h4Setup.textContent = `Setup: ${joke.setup}`
        btnPunchline.textContent = "Reveal Punchline"
        btnRemove.id = "removeButton"
        btnEdit.id = "editButton"
        divContainer.append(h4Setup, btnPunchline, btnEdit, btnRemove, pPunchline)
        btnPunchline.addEventListener('click', (e) => {
            pPunchline.textContent = `Punchline: ${joke.punchline}`
            if (pPunchline.style.display !== "block") {
                pPunchline.style.display = "block";
            } else {
                pPunchline.style.display = "none";
            }
        })
        btnRemove.textContent = "Remove Joke"
        btnRemove.addEventListener('click', (e) => {
            console.log(e.target)
            e.target.parentElement.remove()
            e.stopPropagation()
        })
        btnEdit.textContent = "Edit Joke"
            document.querySelector("#add-joke-form #setup") = element.children[0].innerText
            document.querySelector("#add-joke-form #punchline") = element.children[1].innerText

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