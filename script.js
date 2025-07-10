const state = {
    currentColor: ""
};

async function fetchColors(color) {
    state.currentColor = color
    try {
        
        const response = await fetch("https://www.thecolorapi.com/random");
      if (!response.ok) {
      throw new Error("Network error", response.status);
    } 
     const data = await response.json();
     console.log(data);
    
     return data;
     } catch (error) {
    console.log("ERROR Fetching by color data ", error.message);
    } finally {
    console.log("Finished fetching color data");
    }
   
}
// console.log(Error);

// showColors()
function render(data){
const paletteElem = document.getElementById("palette");
const numValue = document.getElementById("hex-id")
paletteElem.style.backgroundColor = data.hex.value;
numValue.innerHTML = data.hex.value;
}
function render2(data){
const paletteElem2 = document.getElementById("palette2");
const numValue2 = document.getElementById("hex-id2")
paletteElem2.style.backgroundColor = data.hex.value;
numValue2.innerHTML = data.hex.value;
}

// fetchColors and render(data) called in the showColors function



const generateButton = document.getElementById("generate-btn");

generateButton.addEventListener("click", async function showColors(color){
    const data = await fetchColors();
    render(data);
});

// let favorites = [];
// const favoriteButton = document.getElementById("favorite-button");

// const faveListElement = document.createElement("ul");

// favoriteButton.addEventListener("click", async function addToFavorites(){
//     const currentColor = document.createElement("li");
    
//     const favoriteColor = await 
// favorites.push(currentColor);
 
//     faveListElement.appendChild(favoriteColor);

// }
//  );

//  create state




 