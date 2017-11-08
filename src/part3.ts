// flatten
// custom type guards
// generics

const numbers = [1, 2, 3, [4, 5], 7];

function flatten<T>(arr: (T | T[])[]): T [] {
    const result: T[] = [];
    for (const el of arr) {
        if (Array.isArray(el)) {
            result.push(...el);
        } else {
            result.push(el);
        }
    }
    return result;
}

function isFlattened(arr: (number | number[])[]): arr is number[] {
    return !arr.some(Array.isArray);
}

if (isFlattened(numbers)) {
    numbers;
}

console.log(flatten(numbers));
