import { Dictionary } from './dictionary'

describe('Dictionary', () => {
    test('Should return false as we havent added any value yet', () => {
        const dictionary = new Dictionary()
        const response = dictionary.hasKey('key')
        expect(response).toBeFalsy()
    })

    test('Should return true when successfully adding a value', () => {
        const dictionary = new Dictionary()
        const response = dictionary.set('key', 'value')
        expect(response).toBeTruthy()
    })

    test('Should return false when adding null values', () => {
        const dictionary = new Dictionary()
        const response = dictionary.set(null, null)
        expect(response).toBeFalsy()
    })

    test('Should return false when deleting a non-existent value', () => {
        const dictionary = new Dictionary()
        const response = dictionary.remove('wrong_key')
        expect(response).toBeFalsy()
    })

    test('Should return true when deleting an existing value', () => {
        const dictionary = new Dictionary()
        dictionary.set('key', 'value')
        const response = dictionary.remove('key')
        expect(response).toBeTruthy()
    })

    test('Should return the value found in the dictionary', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary')
        const response = dictionary.get('key_one')
        expect(response).toBe('value_dictionary')
    })

    test('Should return undefined when passing a key that does not exist', () => {
        const dictionary = new Dictionary()
        const response = dictionary.get('non-existent_key')
        expect(response).toBeUndefined()
    })

    test('Should return an array with all ValuePair objects', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.set('key_two', 'value_dictionary_two')
        const response = dictionary.keyValues()
        expect(response[0]).toEqual({ key: 'key_one', value: 'value_dictionary_one' })
        expect(response[1]).toEqual({ key: 'key_two', value: 'value_dictionary_two' })
    })

    test('Should return an array with all keys', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.set('key_two', 'value_dictionary_two')
        const keys = dictionary.keys()
        expect(keys).toEqual([ 'key_one', 'key_two' ])
    })

    test('Should return an array with all values', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.set('key_two', 'value_dictionary_two')
        const keys = dictionary.values()
        expect(keys).toEqual([ 'value_dictionary_one', 'value_dictionary_two' ])
    })
})
