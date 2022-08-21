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

    test('Should successfully add a record to the hash table', () => {
        const hashTable = new HashTable()
        const response = hashTable.put('Gandalf', 'gandalf@email.com')
        expect(response).toBeTruthy()
    })

    test('Should return false when trying to add null values', () => {
        const hashTable = new HashTable()
        const response = hashTable.put(null, null)
        expect(response).toBeFalsy()
    })

    test('Should return a value when passing the corresponding key', () => {
        const hashTable = new HashTable()
        hashTable.put('Gandalf', 'gandalf@email.com')
        const key = hashTable.hashCode('Gandalf')
        const response = hashTable.get(key)
        expect(response).toBe('gandalf@email.com')
    })
})