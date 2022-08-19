export class ValuePair {
  constructor (private readonly key: string, private readonly value: string) {}

  toString (): string {
    return `[#${this.key}: ${this.value}]`
  }
}
