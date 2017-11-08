// discriminated union types

type Result = 
    | { success: true, value: number }
    | { success: false, error: string }

function tryParseInt(text: string): Result {
    if (/\d/.test(text)) {
        return { 
            success: true,
            value: parseInt(text, 10),
        };
    }
    return {
        success: false,
        error: `Invalid number format ${text}`,
    }
}

const intResult = tryParseInt('9');

console.log(intResult.value);
