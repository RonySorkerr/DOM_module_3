function calculateParallelogramArea (){
    const base = getInputValueById('parallelogram_base')
    console.log('base is :', base)
    const height = getInputValueById('parallelogram_height');
    console.log('height is : ', height);
}

function getInputValueById (inputfieldId){
    const inputField = document.getElementById(inputfieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;

}