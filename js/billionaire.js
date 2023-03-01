const goBack = document.getElementById('go-back')
const cardBillionaire = document.getElementById('card-container')


let url = `https://forbes400.onrender.com/api/forbes400/getAllBillionaires`



goBack.addEventListener('click', function(){
        window.location.href="mainTask.html"
    })


const loadData = async (url) =>{
    const data = await fetch(url)
    const jsonData = await data.json()
    console.log(jsonData)
}

fetch('https://api.kanye.rest/')
    .then(res=> res.json()).then(data=> console.log(data))
loadData(url)







/* 
    <div class="card mb-3 col-12 col-md-4" style="max-width: 350px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="...">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>

*/