import { defaultToString } from '../utils/utils'
import { ValuePair } from '../models/value-pair'
import { LinkedList } from '../linked-list/linked-list'

export class HashTableSeparateChaining<K, V> {
    protected table: { [key: string]: LinkedList<ValuePair<K, V>> };


    constructor (private readonly toStrFn: (key: K) => string = defaultToString) {
        this.table = {}
    }

    put (key: K, value: V): boolean {
        if (key !== null && value !== null) {
            const position = this.hashCode(key)

            if (this.table[position] === null) {
                this.table[position] = new LinkedList<ValuePair<K, V>>();
            }
            this.table[position].push(new ValuePair(key, value));
            return true;
        }
        return false
    }

    hashCode (key: K) {
        return this.loseLoseHashCode(key)
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



}