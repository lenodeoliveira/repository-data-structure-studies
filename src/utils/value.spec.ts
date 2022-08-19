import { ValuePair } from './value-pair'

describe('ValuePair', () => {
  test('Should return a string with key and value', () => {
    const valuePair = new ValuePair('any_key', 'any_value').toString()
    expect(valuePair).toEqual('[#any_key: any_value]')
  })
})
