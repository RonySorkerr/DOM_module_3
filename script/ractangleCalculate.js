// steps 
// step - 1 : getting the width
// step - 2 : getting the i
// step - 3 : 
//makign the function
function calculateRactangleArea(){
    const racangleWidthInput = document.getElementById('ractangle_width');
    const ractangleWidthValue = racangleWidthInput.value;
    const widht = parseFloat(ractangleWidthValue);
    
    // console.log('width is : ' , widht);

    const ractangleHeightInput = document.getElementById('ractangle_height');
    const ractangleHeightValue = ractangleHeightInput.value;
    const Height = parseFloat(ractangleHeightValue);

    // console.log('heigh is : ', Height);

    const area = widht * Height;

    const showCase = document.getElementById('ractangle_area');
    showCase.innerText = area.toFixed(4);

}

