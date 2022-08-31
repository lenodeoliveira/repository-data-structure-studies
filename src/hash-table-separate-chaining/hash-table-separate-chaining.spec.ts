import { HashTableSeparateChaining } from './hash-table-separate-chaining'

describe('HashTable', () => {
    test('Should return the key number based on the information', () => {
        const hashTableSeparateChaining = new HashTableSeparateChaining()
        const response = hashTableSeparateChaining.hashCode('lennon')
        expect(response).toBe(21)
    })
})
