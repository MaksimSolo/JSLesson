import {salaryReducer} from './main_07_reducer'

/*beforeEach(() => {
    let a = 570
    let b = 330
})*/


/*test('sum', () => {
    expect('sum').toBe()
})


test('sub', () => {
    expect('sub').toBe()
})

test('multiply', () => {
    expect('').toBe()
})

test('div', () => {
    expect('').toBe()
})*/

test('salaryReducer', () => {
    expect(salaryReducer(570, {type: 'sum', payload: 330})).toBe(900)
})

test('salaryReducer', () => {
    expect(salaryReducer(570, {type: 'sub', payload: 330})).toBe(240)
})

test('salaryReducer', () => {
    expect(salaryReducer(570, {type: 'mult', payload: 330})).toBe(188100)
})

test('salaryReducer', () => {
    expect(salaryReducer(570, {type: 'div', payload: 330})).toBe(1.7272727272727273)
})

