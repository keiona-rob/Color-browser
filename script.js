// let colors = [];

const state = {
    currentColor: "",
    colors:[]
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
function render3(data){
const paletteElem3 = document.getElementById("palette3");
const numValue3 = document.getElementById("hex-id3")
paletteElem3.style.backgroundColor = data.hex.value;
numValue3.innerHTML = data.hex.value;
}
function render4(data){
const paletteElem4 = document.getElementById("palette4");
const numValue4 = document.getElementById("hex-id4")
paletteElem4.style.backgroundColor = data.hex.value;
numValue4.innerHTML = data.hex.value;
}
function render5(data){
const paletteElem5 = document.getElementById("palette5");
const numValue5 = document.getElementById("hex-id5")
paletteElem5.style.backgroundColor = data.hex.value;
numValue5.innerHTML = data.hex.value;
}

// fetchColors and render(data) called in the showColors function

async function showColors(color){
    const data = await fetchColors()
    render(data)
    state.colors.push(data.hex)
    console.log(state.colors)
};

async function showColors2(color){
    const data = await fetchColors();
    render2(data)
    state.colors.push(data.hex);
};

async function showColors3(color){
    const data = await fetchColors();
    render3(data)
    state.colors.push(data.hex);
};

async function showColors4(color){
    const data = await fetchColors();
    render4(data)
    state.colors.push(data.hex);
};

async function showColors5(color){
    const data = await fetchColors();
    render5(data)
    state.colors.push(data.hex)
    console.log(state.colors);
};

// for loop

async function showAllColors(){
    for(let i = 0; i < 5; i++){
      const data = await fetchColors();
       colors.push(data.hex) 
    //    render(colors);
    }
}

// generate button

const generateButton = document.getElementById("generate-btn");

generateButton.addEventListener("click", async function showAll(){
    showColors();
    showColors2();
    showColors3();
    showColors4();
    showColors5();
});

let favorites = [];
const favoriteButton1 = document.getElementById("favorite-button1");

favoriteButton1.addEventListener("click", () => {
    favorites.push(state.colors[0]);
    faveListElement.innerHTML += `<li>${state.colors[0].value}</li>`
    console.log(favorites)
} ) 

const favoriteButton2 = document.getElementById("favorite-button2");

favoriteButton2.addEventListener("click", () => {
    favorites.push(state.colors[1]);
    faveListElement.innerHTML += `<li>${state.colors[1].value}</li>`
    console.log(favorites)
} )

const favoriteButton3 = document.getElementById("favorite-button3");

favoriteButton3.addEventListener("click", () => {
    favorites.push(state.colors[2]);
    faveListElement.innerHTML += `<li>${state.colors[2].value}</li>`
    console.log(favorites)
} )

const favoriteButton4 = document.getElementById("favorite-button4");

favoriteButton4.addEventListener("click", () => {
    favorites.push(state.colors[3]);
    faveListElement.innerHTML += `<li>${state.colors[3].value}</li>`
    console.log(favorites)
} )

const favoriteButton5 = document.getElementById("favorite-button5");

favoriteButton5.addEventListener("click", () => {
    favorites.push(state.colors[4]);
    faveListElement.innerHTML += `<li>${state.colors[4].value}</li>`;
    li.style.backgroundColor = data.hex.value
    console.log(favorites)
} )


const faveListElement = document.getElementById("fave-list");

// favoriteButton.addEventListener("click", async function addToFavorites(){
//     const currentColor = document.createElement("li");
    
//     const favoriteColor = await 
// favorites.push(currentColor);
 
//     faveListElement.appendChild(favoriteColor);

// }
//  );

//  function saveFavorites() {
//   localStorage.setItem('favorites', JSON.stringify(favorites));

//   use inside favoriteButton1 function
// }
// trying to create state to determine current color




//  repl colors with state.colors