const uiImage = document.querySelector("#image");
const uiCardBody = document.querySelector(".card-body");
const uiCardTitle = document.querySelector("#cardTitle");
const uiCardText = document.querySelector(".card-text");
const container = document.querySelector(".container");
console.log(uiImage)
console.log(uiCardBody)
console.log(uiCardTitle)
console.log(uiCardText)
console.log(uiCardText)



const uiCreation = (data) => {
  const mapData = data.map((item) => {
    const uiDataToHtml = `  <div class="card mb-5" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" id="image" alt="">
          <div class="card-body">

          <h5 class="card-title" id="cardTitle">${item.title}</h5>
                      
          <p class="card-text">${item.description}</p>
                      
        <a href="#" class="btn btn-primary" id="button">${item.price  }</a>
                      
   </div>
   </div> `
    return uiDataToHtml;
  })
  container.innerHTML = mapData
}

const fetchData = fetch( `https://fakestoreapi.com/products/`)
.then((dataResp)=>{
console.log(dataResp)
return dataResp.json()
})
.then(function(jsonFormData){
  console.log(jsonFormData)
  uiCreation(jsonFormData )
})