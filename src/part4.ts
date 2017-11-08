// type/interface
// readonly
// readonly constructor
// readonly index signatures

type User = {
    readonly id: number;
    name: string;
}

class U {
    readonly id: number;
    constructor(id) {
        this.id = id;
    }
}

const u = new U(1);
u.id = 4;

const user: User = { id: 1, name: 'test'}

type Immutable = {
    readonly [n: number]: any
}

const weekDays: Immutable = [
    "monday",
    "tuesday",
    "wednesday",
]

weekDays[0] = 'sunday';