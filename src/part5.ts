// never
// exhaustive case

const test = (): never => {
    while(true) {
    }
}

const t = test();

enum ShirtSize {
    S, M, L
}
const check = (n: never) => n;

function printSize(size: ShirtSize) {
    switch(size){
        case ShirtSize.S:
            return 'small';
        case ShirtSize.M:
            return 'medium';
        case ShirtSize.L:
            return 'large';
        default:
            check(size);
    }
}
