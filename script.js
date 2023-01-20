const mainContainer = document.getElementById("main-container");
const colourModeButton = document.getElementById("colourModeButton")
const eraserModeButton = document.getElementById("eraserModeButton");
let slider = document.getElementById("slider");


  slider.addEventListener('change', ()=>{
    console.log(slider.value)
    
    
    for (let i = 1; i <= slider.value; ++i) {
      
      const gridChildrens = document.createElement("div");
      gridChildrens.setAttribute("id", `gridChildrens`);
      mainContainer.appendChild(gridChildrens);
      
      
      
      gridChildrens.addEventListener("mouseover", () => {
        gridChildrens.setAttribute("class", "gridChildrensColoured");
      });
      
      eraserModeButton.addEventListener("click", () => {
        gridChildrens.addEventListener("mouseover", () => {
          gridChildrens.setAttribute("class", "gridChildrensErased");
        });
      });
      
      colourModeButton.addEventListener('click',()=>{
        gridChildrens.addEventListener("mouseover", () => {
          gridChildrens.setAttribute("class", "gridChildrensColoured");
        });
      })
    }
    
  })
