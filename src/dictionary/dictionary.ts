
import { ValuePair } from '../utils/value-pair'

type Table = {
  [key: string]: string
}

export class Dictionary {
  private readonly table: Table

  constructor () {
    this.table = {}
  }

  hasKey (key: string): boolean {
    if (Object.keys(this.table).includes(key)) {
      return true
    }
    return false
  }

  set (key: string, value: string): boolean {
    if (key && value) {
      this.table[key] = new ValuePair(key, value).toString()
      return true
    }
    return false
  }

  remove (key: string): boolean {
    if (this.hasKey(key)) {
      delete this.table.key
      return true
    }
    return false
  }

  get (key: string): string {
    const valuePair = this.table[key]
    return valuePair == null ? undefined : valuePair
  }
}
