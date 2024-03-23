const uiImage = document.querySelector("#image");
const uiCardBody = document.querySelector(".card-body");
const uiCardTitle = document.querySelector("#cardTitle");
const uiCardText = document.querySelector(".card-text");
const container = document.querySelector(".container");
// console.log(uiImage)
// console.log(uiCardBody)
// console.log(uiCardTitle)
// console.log(uiCardText)
// console.log(uiCardText)



const uiCreation = (data) => {
  const mapData = data.map((item) => {
    const uiDataToHtml = `  <div class="card " style="width: 18rem;">
          <img src="${item.flags.png}" class="card-img-top" id="image" alt="">
          <div class="card-body">

          <h5 class="card-title" id="cardTitle">${item.name.common}</h5>
                      
          <p class="card-text">Language ${item.languages.ara}</p>
          <p class="card-text" > Population ${item.population}</p>
          <p class="card-text"> Location ${item.maps.googleMaps}</p>
                      
                      
   </div>
   </div> `
    return uiDataToHtml;
  })
  container.innerHTML = mapData
}

const fetchData = fetch( `https://restcountries.com/v3.1/name/egypt`)
.then((dataResp)=> dataResp.json())
.then((jsonFormData)=>{ 
console.log(jsonFormData)

})

//   console.log(jsonFormData)
// console.log(dataResp)
