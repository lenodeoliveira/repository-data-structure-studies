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

    test('Should return the total size of the dictionary', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.set('key_two', 'value_dictionary_two')
        const size = dictionary.size()
        expect(size).toBe(2)
    })

    test('Should check if the dictionary is empty (false)', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.set('key_two', 'value_dictionary_two')
        const size = dictionary.isEmpty()
        expect(size).toBeFalsy
    })

    test('Should check if the dictionary is empty (true)', () => {
        const dictionary = new Dictionary()
        const size = dictionary.isEmpty()
        expect(size).toBeTruthy()
    })

    test('Should clear the dictionary', () => {
        const dictionary = new Dictionary()
        dictionary.set('key_one', 'value_dictionary_one')
        dictionary.clear()
        const size = dictionary.isEmpty()
        expect(size).toBeTruthy()
    })

    test('Should return a string with the dictionary values', () => {
        const dictionary = new Dictionary()
        dictionary.set('Gandalf', 'gandalf@email.com')
        dictionary.set('John', 'johnsnow@email.com') 
        dictionary.set('Tyrion', 'tyrion@email.com')
        const toString = dictionary.toString()
        expect(toString).toBe('[#Gandalf: gandalf@email.com], [#John: johnsnow@email.com], [#Tyrion: tyrion@email.com]')
    })

    test('Should return an empty string', () => {
        const dictionary = new Dictionary()
        const emptyString = dictionary.toString()
        expect(emptyString).toBe('') 
    })

    test('Should be possible to iterate over the dictionary', () => {
        const dictionary = new Dictionary()
        dictionary.set('Gandalf', 'gandalf@email.com')
        dictionary.set('John', 'johnsnow@email.com') 
        dictionary.set('Tyrion', 'tyrion@email.com')

        const expectObj =  {
            Gandalf: 'gandalf@email.com',
            John: 'johnsnow@email.com',
            Tyrion: 'tyrion@email.com'
          }

        let response: any
        dictionary.forEach((k: any, v: any) => {
            response = {
                ...response,
                [k]: v
            }
        })
        expect(response).toEqual(expectObj)
    })

    test('allows to iterate with forEach', () => {
        const dictionary = new Dictionary()
        for (let i = 1; i <= 5; i++) {
          expect(dictionary.set(i, i)).toEqual(true);
        }
    
        dictionary.forEach((k: any, v: any) => {
          expect(dictionary.hasKey(k)).toEqual(true);
          expect(dictionary.get(k)).toEqual(v);
        });
      });
    
      test('allows to iterate with forEach and interrupt', () => {
        const dictionary = new Dictionary()

        for (let i = 1; i <= 5; i++) {
          expect(dictionary.set(i, i)).toEqual(true);
        }
    
        const size = dictionary.keys().length;
    
        let index = 1;
        dictionary.forEach((k: any, v: any) => {
          expect(dictionary.hasKey(k)).toEqual(true);
          expect(dictionary.get(k)).toEqual(v);
          index++;
        });
        expect(index).toEqual(size + 1);
    
        index = 1;
        dictionary.forEach((k: any, v: any) => {
          expect(dictionary.hasKey(k)).toEqual(true);
          expect(dictionary.get(k)).toEqual(v);
          index++;
          return !(k % 3 === 0);
        });
        expect(index).toEqual(size - 1);
      });
})

