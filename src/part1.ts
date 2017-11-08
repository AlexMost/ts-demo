// nullable types
// type inferrence

function trimAndLower(str: string) {
    return str.trim().toLowerCase();
}

const a = trimAndLower(' TEST ');

console.log(trimAndLower('   TEST '));

export default 1;
