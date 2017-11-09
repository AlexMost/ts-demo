// nullable types
// type inferrence
// implicit this

function trimAndLower(str: string) {
    return str.trim().toLowerCase();
}

const a = trimAndLower(' TEST ');

console.log(trimAndLower('   TEST '));

export default trimAndLower;
