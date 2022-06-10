

class binarySearch {

    search(numArray, n, target) {
    
        var start = 0;
        var end = n - 1;
    
        while (start <= end) {
            var middle = parseInt((start + end) / 2); 
    
            if (numArray[middle] == target) {
                return middle;
            } else if (numArray[middle] > target) {
                end = middle - 1;
            } else if (numArray[middle] < target) {
                start = middle + 1;
            }
        }
    
        return -1;
    }
    
}
    var numArray = [2, 5, 6, 8, 9, 10];
    var target = 10;
    var n = numArray.length; // array length
    
    const object = new binarySearch();
    var result = object.search(numArray, n, target);
    var message = '';
    
    if (result != -1) {
        message = 'Index number is : ' + result;
    } else {
        message = 'Target value does not exists this array!'
    }
    
    console.log(message);