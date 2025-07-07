async function fetchImages() {

    try {
        // render();
        const response = await fetch("https://www.thecolorapi.com/random");
      if (!response.ok) {
      throw new Error("Network error", response.status);
    } 
     const data = await response.json();
     console.log(data);
     gallery.innerHTML = data
     return data;
     } catch (error) {
    console.log("ERROR Fetching by color data ", error.message);
    } finally {
    console.log("Finished fetching color data");
    }
}
// console.log(Error);
fetchImages()