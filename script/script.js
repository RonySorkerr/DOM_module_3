/**
 * objective get base, height of a triangle. Calculate the area by using the provided formula. and then display the area.
 * step -1 : get the base
 * step - 2: added an id in the base input
 * step-3: use getElementById to access the input field
 * step -4: get value from the input field
 * convert the value to a number to float
 * 
 */
function calculateTriangleArea(){
    // get triangle base
    const triableBaseInput = document.getElementById('trialgle_base');
    const triableBaseNumber = triableBaseInput.value;
    const base = parseFloat(triableBaseNumber);
    console.log('base', base); 

    const triangleHeightInput = document.getElementById('triangle_hieght');
    const triangleHeightNumber = triangleHeightInput.value;
    const height = parseFloat(triangleHeightNumber);
    console.log('height' , height);
}