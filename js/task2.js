const cardContainer = document.getElementById('card-container')
const url = '../data/api-2-data.json'
const getData = async(url)=>{
    const data = await fetch(url)
    const jsonData = await data.json()

    displayData(jsonData)
}

getData(url)
function displayData(data){
    for(const car of data.slice(0,3)){
        const div = document.createElement('div')
        div.classList.add('col')
        const element = `
        <div class="card">
          <img src="${car.imageURL}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Car Name: ${car.name}</h5>
            <p class="card-text">Car Details: ${car.description}</p>
            <button class="btn btn-primary">Price: ${car.price}</button>
          </div>
        </div>
      `
      div.innerHTML = element;
      cardContainer.appendChild(div)
    }

}