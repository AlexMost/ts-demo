// flatten
// custom type guards
// generics
var numbers = [1, 2, 3, [4, 5], 7];
function flatten(arr) {
    var result = [];
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var el = arr_1[_i];
        if (Array.isArray(el)) {
            result.push.apply(result, el);
        }
        else {
            result.push(el);
        }
    }
    return result;
}
function isFlattened(arr) {
    return !arr.some(Array.isArray);
}
if (isFlattened(numbers)) {
    numbers;
}
console.log(flatten(numbers));
