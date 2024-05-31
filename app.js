 const getColor = document.querySelector('.get-color');
const selectBox = document.querySelector('#select-box');
let colorsNote = document.querySelector('.colors-note');
let main = document.querySelector('.main');




getColor.addEventListener("click", () => {  
    document.querySelector('.main-content').innerHTML = '';
    document.querySelector('.main-sub').innerHTML = '';

    let color = document.querySelector('#color-picker').value;
    color = color.replace("#", "");
    let selectedMode = selectBox.value;
    console.log(selectedMode)
   
    fetch(`https://www.thecolorapi.com/id?hex=${color}`, {method:'GET'})
     .then(res => res.json())
     .then(data => {
        console.log(`color ${color}`)
    });
        
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${selectedMode}`, {method:'GET'})
    .then(res => res.json())
    .then(data => {
        console.log(data)
        data.colors.forEach(color => {
            console.log(color)
            document.querySelector('.main-content').innerHTML += `
            <div class='colors-note' style='background-color:${color.hex.value}'></div>
            `
            document.querySelector('.main-sub').innerHTML += `
             <p>${color.hex.value}</p> 
            `
        });
    });
});
 
