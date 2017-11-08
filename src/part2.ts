// union types
// control flow type analysis

function trimAndLower(str: string | null) {
    str;
    if (str === undefined) {
        str;
        return;
    }
    if (typeof str === 'string') {
        str;
        return str.trim().toLowerCase();
    }
    return str;
}

const result = trimAndLower(' TEST ');

