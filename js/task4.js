//variables 
const inputField = document.getElementById('input-field')
const shortenBtn = document.getElementById("shorten-btn")
const showAllLinkBtn = document.getElementById("show-allLink-btn")
const copyLinkBtn = document.getElementById('copy-link')

const showShortenLink = document.getElementById("shorten-link")

let url = `https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html`

shortenBtn.addEventListener('click', function(){
    if(inputField.value){
        const link = inputField.value
        url = `https://api.shrtco.de/v2/shorten?url=${link}`
        console.log(url)
        shorten(url)


        inputField.style.border = ""
        inputField.style.backgroundColor = ""
        inputField.value = ""
    }else{
        inputField.style.border = "2px solid red"
        inputField.style.backgroundColor = "lightpink"
    }
})

async function shorten(url){
    const data = await fetch(url);
    const jsonData = await data.json();
    console.log(jsonData)
    showLink(jsonData)
}

function showLink(data){
    showShortenLink.innerText = `${data.result.full_short_link2}`
}