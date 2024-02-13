function CalculateRhombusArea(){
    const base = getInputById('d1');
    const height = getInputById('d2');
    const area = 0.5 * base * height;

    setOutputById('rhombus_area_output', area.toFixed(4));
    console.log('Area:', area);

}

function getInputById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}

function setOutputById(elementId, area){
    const output = document.getElementById(elementId);
    output.innerText = area;
}
