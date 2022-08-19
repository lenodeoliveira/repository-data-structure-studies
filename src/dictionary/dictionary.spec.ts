import { Dictionary } from './dictionary'
describe('Dictionary', () => {
  test('Should make it false because there are no keys in the dictionary yet', () => {
    const dictionary = new Dictionary()
    const response = dictionary.hasKey('any_key')
    expect(response).toBeFalsy()
  })

  test('Should return true when adding key and value', () => {
    const dictionary = new Dictionary()
    dictionary.set('key', 'value')
    const response = dictionary.hasKey('key')
    expect(response).toBeTruthy()
  })

  test('Should return true to add keys and values', () => {
    const dictionary = new Dictionary()
    const response = dictionary.set('key', 'value')
    expect(response).toBeTruthy()
  })

  test('Should delete a value passing the key', () => {
    const dictionary = new Dictionary()
    dictionary.set('key', 'value')
    const response = dictionary.remove('key')
    expect(response).toBeTruthy()
  })

  test('Should delete a value passing the key', () => {
    const dictionary = new Dictionary()
    dictionary.set('any_key', 'any_value')
    const response = dictionary.get('any_key')
    expect(response).toEqual('[#any_key: any_value]')
  })
})
