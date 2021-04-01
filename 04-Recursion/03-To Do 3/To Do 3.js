//Given an ordered array and a value, recursively determine whether the value is within the array.
//rBinarySearch ([1,3,5,6], 4) = false; 
//rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch(arr, value) {
    var mid = Math.floor(arr.length / 2);
    if (arr[mid] == value) {
        return true;
    }
    else if (value < arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(0, mid), value);
    }
    else if (value > arr[mid] && arr.length > 1) {
        return rBinarySearch(arr.slice(mid, arr.length), value);
    } else {
        return false
    }
}
console.log(rBinarySearch([1, 3, 5, 6], 4)) //= false; 
console.log(rBinarySearch([4, 5, 6, 8, 12], 5))// = true

//================================================================
//Greatest common divisor
//Given two integers, create rGCF (num1, num2) to recursively determine the greatest common factor (the largest integer that divides evenly into both). The Greek mathematician Euclid proved these facts:
//gcf(a,b) == a, if a == b;
//gcf(a,b) == gcf(a-b,b), if a>b;
//gcf(a,b) == gcf(a,b-a), if b>a.
//Second:  rework the facts n. 2 and n. 3 to reduce battery consumption and expand the reach of rGCF. You should be able to calculate rGCF (123456.987654).

function rGCF(x, y) {
    if (x == y) {
        return x;
    }
    if (x > y) {
        return rGCF(x - y, y);
    }
    if (x < y) {
        return rGCF(x, y - x);
    }
}
console.log(rGCF(3, 7));
console.log(rGCF(18, 27));
console.log(rGCF(49, 14));

function GCF(x, y) {
    if (x == y) {
        return x;
    }
    if (x > y) {
        if ((x / y) % 1 === 0) {
            return y;
        } else {
            return GCF(x - y, y);
        }
    }
    if (x < y) {
        if ((x / y) % 1 === 0) {
            return y;
        } else {
            return GCF(x, y - x);
        }
    }
}
console.log(GCF(123456, 987654));