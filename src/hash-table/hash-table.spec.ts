import { HashTable } from './hash-table'

describe('HashTable', () => {
    test('Should return the key number based on the information', () => {
        const hashTable = new HashTable()
        const key = hashTable.hashCode('lennon')
        expect(key).toBe(21)
    })

    test('Should return the key number', () => {
        const hashTable = new HashTable()
        const key = hashTable.hashCode(21)
        expect(key).toBe(21)
    })
})