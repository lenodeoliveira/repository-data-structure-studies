import { defaultToString } from './utils'

describe('defaultToString', () => {
    test('Should return null when passing null', () => {
        const response = defaultToString(null)
        expect(response).toBe('NULL')
    })

    test('Should return undefined when passing undefined', () => {
        const response = defaultToString(undefined)
        expect(response).toBe('UNDEFINED')
    })

    test('Should transform to string when passing a number', () => {
        const response = defaultToString(12)
        expect(response).toBe('12')
    })
})