
import { ValuePair } from '../models/value-pair'
import { defaultToString } from '../utils/utils'
export class Dictionary<K, V> {
  private readonly table: { [key: string]: ValuePair<K, V> }
  constructor (private readonly toStrFn: (key: K) => string = defaultToString) {
    this.table = {}
  }

  hasKey (key: K): boolean {
    return this.table[this.toStrFn(key)] != null
  }

  set (key: K, value: V): boolean {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key)
      this.table[tableKey] = new ValuePair(key, value)
      return true
    }
    return false
  }

  remove (key: K): boolean {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }

    return false
  }

  get (key: K): V {
    const valuePair = this.table[this.toStrFn(key)]
    return valuePair == null ? undefined : valuePair.value;
  }

  keyValues (): ValuePair<K, V>[] {
    return Object.values(this.table)
  }

  keys (): K[] {
    return this.keyValues().map(
      (valuePair: ValuePair<K, V>) => valuePair.key
    )
  }

  values (): V[] {
    return this.keyValues().map(
      (valuePair: ValuePair<K, V>) => valuePair.value
    )
  }
}