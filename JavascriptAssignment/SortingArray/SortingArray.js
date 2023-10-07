//Using Bubble Sort Algorithm and Log the output in the browser console

function descendingSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {
            
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--; 
    } while (swapped);

    return arr;
}

// Example usage:
const numbers = [5, 2, 9, 1, 5, 6];
const sortedDescending = descendingSort(numbers.slice());

console.log("Descending Sort (without sort method):", sortedDescending);

// Below Code is using sort method

// Simple code
// function simpleDescendingSort(arr) {
//     return arr.sort((a, b) => b - a);
// }

// function optimizedDescendingSort(arr) {
//     return arr.sort((a, b) => b - a).reverse();
// }

// const numbers = [5, 2, 9, 1, 5, 6];
// const simpleSorted = simpleDescendingSort(numbers.slice());
// const optimizedSorted = optimizedDescendingSort(numbers.slice());

// console.log("Simple Descending Sort:", simpleSorted);
// console.log("Optimized Descending Sort:", optimizedSorted);
