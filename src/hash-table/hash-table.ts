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
}