import { HashTableSeparateChaining } from './hash-table-separate-chaining'

describe('HashTableSeparateChaining', () => {
    test('Should return the key number based on the information', () => {
        const hashTableSeparateChaining = new HashTableSeparateChaining()
        const response = hashTableSeparateChaining.hashCode('lennon')
        expect(response).toBe(21)
    })

    test('Should be possible to successfully add a record', () => {
        const hashTableSeparateChaining = new HashTableSeparateChaining()
        const response = hashTableSeparateChaining.put('lennon', 'lenodeoliveira@gmail.com')
        expect(response).toBeTruthy()
    })

    test('Should return false when trying to add null values', () => {
        const hashTableSeparateChaining = new HashTableSeparateChaining()
        const response = hashTableSeparateChaining.put(undefined, undefined)
        expect(response).toBeFalsy()
    })
})

