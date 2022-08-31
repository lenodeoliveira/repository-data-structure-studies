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
        const response = hashTable.get('Gandalf')
        expect(response).toBe('gandalf@email.com')
    })

    test('Should return undefined if no record exists', () => {
        const hashTable = new HashTable()
        const response = hashTable.get(22)
        expect(response).toBeUndefined()
    })

    test('Should remove record from hash table', () => {
        const hashTable = new HashTable()
        hashTable.put('Gandalf', 'gandalf@email.com')
        const remove = hashTable.remove('Gandalf')
        expect(remove).toBeTruthy()
    })

    test('Should return false when trying to remove non-existent record', () => {
        const hashTable = new HashTable()
        const remove = hashTable.remove(null)
        expect(remove).toBeFalsy()
    })

    test('Should return the size of the hash table', () => {
        const hashTable = new HashTable()
        hashTable.put('Gandalf', 'gandalf@email.com')
        const sizeOne = hashTable.size()
        expect(sizeOne).toBe(1)
    })

    test('Should return true if hash table is empty', () => {
        const hashTable = new HashTable()
        const isEmpty = hashTable.isEmpty()
        expect(isEmpty).toBeTruthy()
    })

    test('Should return true if hash table is empty', () => {
        const hashTable = new HashTable()
        const isEmpty = hashTable.isEmpty()
        expect(isEmpty).toBeTruthy()
    })

    test('Should return false if hash table is not empty', () => {
        const hashTable = new HashTable()
        hashTable.put('Gandalf', 'gandalf@email.com')
        const isEmpty = hashTable.isEmpty()
        expect(isEmpty).toBeFalsy()
    })

    test('Should return an empty string', () => {
        const hashTable = new HashTable()
        const isEmpty = hashTable.toString()
        expect(isEmpty).toBe('')
    })

    test('Should return a string containing a list of records', () => {
        const hashTable = new HashTable()
        hashTable.put('Gandalf', 'gandalf@email.com')
        hashTable.put('Frodo', 'frodo@email.com')
        hashTable.put('Same', 'same@email.com')
        const toString = hashTable.toString()
        expect(toString).toEqual('{19 => [#Gandalf: gandalf@email.com]},{20 => [#Same: same@email.com]},{25 => [#Frodo: frodo@email.com]}')

    })
})
