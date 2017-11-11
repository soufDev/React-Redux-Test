export function addNumber(number) {
    return {
        type: 'ADD',
        payload: number,
    }
};

export function subNumber(number) {
    return {
        type: 'SUB',
        payload: number,
    }
};