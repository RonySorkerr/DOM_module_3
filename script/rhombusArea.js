function CalculateRhombusArea (){
    const base = document.getInputById('d1');

    const height = document.getInputById('d2')

    const area = 0.5 * base * height;

    setOutputById('rhombus_area_output', area);
}

function getInputById(inputField){
    const inputField = document.getInputById(inputField);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setOutputById(elementId, area){
    const output = document.getElementById(elementId);
    output.innerText = area;
}