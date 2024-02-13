function calculateParallelogramArea (){
    const base = getInputValueById('parallelogram_base')
    console.log('base is :', base)
    const height = getInputValueById('parallelogram_height');
    console.log('height is : ', height);

    const area = base * height;
    console.log('area is : ', area);

    setInnerTextById('Parallelogram_Area', area.toFixed(4));
}

function getInputValueById (inputfieldId){
    const inputField = document.getElementById(inputfieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}