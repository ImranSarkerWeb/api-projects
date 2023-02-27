//variables

const cardContainer = document.getElementById('card-container');
const headerTitle = document.getElementById('header-title')

const url = '../data/api-1-data.json'
const getData = (url)=>{
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))

  
    //displayData(data)
}
getData(url)


const displayData = (data)=>{
    console.log(data)
    console.log(data.result[0].name.common)
    headerTitle.innerText = data.message;
    for(const item of data.result){
       const div =document.createElement('div');
       div.classList.add('col-sm-6')
       const element = `
       <div class="card">
       <div class="card-body">
           <h5 class="card-title">Person Name: ${item.name.common}</h5>
           <p class="card-text">age: ${item.age}</p>
           <p class="card-text">Street: ${item.address.street}, House No. ${item.address.house}</p>
       </div>
   </div>
       `
       div.innerHTML =element;
       cardContainer.appendChild(div)
    }

}
