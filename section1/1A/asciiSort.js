/** Write a sorting algorithm that sorts strings based on the ASCII code of the third letter first, then second letter and then the first letter.
*/

const stringArray = ['BOAT', 'Locomotive', 'Poet', 'Accelerate', 'GOLF', 'ACCIDENTAL', 'Submarine'];
main();

function asciiConverter(input) {
    // Convert strings to arrays of ascii codes
    let inputArr = input.split('');
    let asciified = inputArr.map((char) => char.charCodeAt(0));
    return asciified;
}

function buildArray2d() {
    //push the arrays of asciified values to a two-dimensional array
    let array2d = [];
    for (let i = 0; i < stringArray.length; i++) {
        array2d.push(asciiConverter(stringArray[i]));
        console.log(array2d);
    }
    return array2d;
}
function compareArrays(arr) {
    //sorting algorithm

}

function main() {
    compareArrays(buildArray2d());

}