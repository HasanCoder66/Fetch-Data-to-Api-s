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
          <img src="${item.coatOfArms.png}" class="card-img-top" id="image" alt="">
          <div class="card-body">

          <h5 class="card-title" id="cardTitle">Country Name: ${item.name.common}</h5>
          
          <p class="card-text">Capital: ${item.capital}</p>
          <p class="card-text">Region:  ${item.region}</p>
          <p class="card-text">Location by google Map: ${item.maps.googleMaps}</p>
          <p class="card-text">Population:  ${item.population}</p>
          <p class="card-text"> Language: ${item.languages.eng}</p>
          <p class="card-text"> Connected Border:  ${item.borders} </p>
                      
                      
   </div>
   </div> `;
    return uiDataToHtml;
  });
  container.innerHTML = mapData;
};

const fetchData = fetch(`https://restcountries.com/v3.1/name/india`)
  .then((dataResp) => {
    console.log(dataResp);
    return dataResp.json();
  })
  .then(function (jsonFormData) {
    console.log(jsonFormData);
    uiCreation(jsonFormData);
  });
