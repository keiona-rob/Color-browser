async function fetchColors() {

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

showColors()
function render(data){
const paletteElem = document.getElementById("palette");
paletteElem.style.backgroundColor = data.hex.value
}

async function showColors(){
    const data = await fetchColors();
    render(data);
}