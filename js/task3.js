//variables
const countryContainer = document.getElementById("card-country")
//region Africa, Americas, Asia, Europe, Oceania

const region = document.getElementById('region')
region.addEventListener('select', function(){
    console.log(region.value)
})

const url = 'https://restcountries.com/v3.1/region/europe'

const getCountry = async(url) => {
    const data = await fetch(url)
    const jsonData = await data.json()
    displayCountry(jsonData)
}

getCountry(url)


function displayCountry(data){
    console.log(data)

    for(const country of data){
        const div = document.createElement('div')
        div.classList.add('col')
        const element = `
        <div class="card">
                <img src="${country.flags.png}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Name: ${country.altSpellings[1]
                  }</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
        `
        div.innerHTML = element
        countryContainer.appendChild(div)
    }
}


/* 
 <div class="col">
              
            </div>


*/