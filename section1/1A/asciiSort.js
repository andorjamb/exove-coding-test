/** Write a sorting algorithm that sorts strings based on the ASCII code of the third letter first, then second letter and then the first letter.
*/

/* test changes */
const stringArray = ['BOAT', 'Locomotive', 'Poet', 'Accelerate', 'GOLF', 'ACCIDENTAL', 'Submarine', 'ghost'];
main();

function asciiConverter(input) {
    // Convert strings to arrays of ascii codes
    let inputArr = input.split('');
    let asciified = inputArr.map((char) => char.charCodeAt(0));
    return asciified;
}
/*
function buildArray2d() {
    //push the arrays of asciified values to a two-dimensional array
    let array2d = [];
    for (let i = 0; i < stringArray.length; i++) {
        array2d.push(asciiConverter(stringArray[i]));
        console.log(array2d);
    }
    return array2d;
} * /

// Add to a specified location
//Array.splice(start_position, 0, new_element...);


*/

//divide and conquer
function mergeSort(arr) {
    if (arr.length <= 1) { console.log(arr); return arr };
    arrMidpoint = Math.floor(arr.length / 2);
    let firstHalf = mergeSort(arr.slice(0, arrMidpoint)); //recursive
    console.log(firstHalf);
    let secondHalf = mergeSort(arr.slice(arrMidpoint));
    console.log(secondHalf);
    mergeArrays(firstHalf, secondHalf);

    function mergeArrays(arr1, arr2) {
        let sorted = [];
        let i = 0;
        let j = 0;
        console.log(arr1);
        console.log(arr2);
        while (i < arr1.length && j < arr2.length) {
            if (asciiConverter(arr1[i])[2] < asciiConverter(arr2[j])[2]) {
                sorted.push(arr1[i]);
                console.log(sorted);
                i++;
            }
            /*   if (arr2[j] > arr1[i]) {
                  results.push(arr1[i]);
                  i++;
              } */
            else {
                sorted.push(arr2[j])
                j++;
            }
        }
        while (i < arr1.length) {
            sorted.push(arr1[i])
            i++;
        }
        while (j < arr2.length) {
            sorted.push(arr2[j])
            j++;
        }
        return sorted;


        /*    else if (arr1.charCodeAt(2) === sorted[0].charCodeAt(2)) {
               if (arr1.charCodeAt(1) < sorted[0].charCodeAt(1)) {
                   sorted.unshift(arr1)
                   console.log(sorted);
               }
               else if (arr1.charCodeAt(1) === sorted[0].charCodeAt(1)) {
                   if (arr1.charCodeAt(0) < sorted[0].charCodeAt(0))
                       sorted.unshift(arr1)
                   console.log(sorted);
               } */
        //}

    }
}

function main() {
    mergeSort(stringArray);
}




