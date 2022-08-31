import { defaultToString } from '../utils/utils'
import { ValuePair } from '../models/value-pair'

export class HashTable<K, V> {
    private table: { [key: string]: ValuePair<K, V> }

    constructor (private readonly toStrFn: (key: K) => string = defaultToString) {
        this.table = {}
    }

    private loseLoseHashCode (key: K): number {
        if (typeof key === 'number') {
            return key
        }

        const tableKey = this.toStrFn(key);
        let hash = 0
        for (let i = 0; i < tableKey.length; i += 1) {
            hash += tableKey.charCodeAt(i)
        }
        return hash % 37
    }

    hashCode (key: K) {
        return this.loseLoseHashCode(key)
    }

    put (key: K, value: V): boolean {
        if (key !== null && value !== null) {
            const position = this.hashCode(key)
            this.table[position] = new ValuePair(key, value)
            return true
        }
        return false
    }

    get (key: K): V {
        const valuePair = this.table[this.hashCode(key)]
        return valuePair === undefined ? undefined : valuePair.value
    }

    remove (key: K): boolean {
        const hash = this.hashCode(key)
        const valuePair = this.table[hash]

        if (valuePair !== undefined) {
            delete this.table[hash]
            return true
        }
        return false
    }

    isEmpty (): boolean {
        return this.size() === 0
    }

    size (): number {
      return Object.keys(this.table).length
    }

    toString (): string {
        if (this.isEmpty()) {
            return ''
        }
        const keys = Object.keys(this.table)
        let objString = `{${keys[0]} => ${this.table[keys[0]].toString()}}` 
        for (let i = 1; i < keys.length; i++) { 
            objString = `${objString},{${keys[i]} => ${this.table[keys[i]].toString()}}` 
        } 
        return objString
    }

}


