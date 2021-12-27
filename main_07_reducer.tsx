export const sum = (state: number, num: number) => {
    return state + num
}

export const sub = (state: number, num: number) => {
    return state - num
}

export const multiply = (state: number, num: number) => {
    return state * num
}
export const div = (state: number, num: number) => {
    return state / num
}

// надо знать:
//1. что на старте //570
//2. тип действия // сумма
//3. доп значения - надбавки и т д //330

export type ActionType = {
    type: 'sum' | 'sub' | 'mult' | 'div'
    payload: number //доп значение
}
export const salaryReducer = (state: number, action: ActionType): number => {
    switch (action.type) {
        case 'sum':
            return state + action.payload
        case "sub":
            return state - action.payload
        case "mult":
            return state * action.payload
        case "div":
            return state / action.payload
        default:
            return state
    }
}

