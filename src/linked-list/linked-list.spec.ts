import { LinkedList } from './linked-list'
import { Node } from '../models/linked-list-models'


describe('LinkedList', () => {
    test('Should return the element that was added', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('lennon')
        const response = linkedList.getHead()
        expect(response.element).toBe('lennon')
    })

    test('Should return the size of the list', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('lennon')
        const size = linkedList.size()
        expect(size).toBe(1)
    })

    test('Should return true if list is empty', () => {
        const linkedList = new LinkedList<string>()
        const size = linkedList.isEmpty()
        expect(size).toBeTruthy()
    })

    test('Should return undefined if the list is cleared', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('lennon')
        linkedList.clear()
        const response = linkedList.getHead()
        expect(response).toBeUndefined()
    })

    test('Should be added in the given position', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.push('test-3')
        linkedList.push('test-4')
        linkedList.insert('test-5', 1)
        
        const test5 = linkedList.getElementAt(1)
        expect(test5?.element).toBe('test-5')
    })

    test('Should undefined when fetching a return value that does not exist', () => {
        const linkedList = new LinkedList<string>()
        const test = linkedList.getElementAt(1)
        expect(test?.element).toBeUndefined()
    })

    test('Should be added in the given position', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.insert('test-5', 0)
        
        const test5 = linkedList.getElementAt(0)
        expect(test5?.element).toBe('test-5')
    })

    test('Should be added in the given position', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        const respose = linkedList.insert('test-5', 76)
        expect(respose).toBeFalsy()
    })

    test('Should remove passed index element', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.push('test-3')
        const element1 = linkedList.removeAt(0)
        expect(element1).toBe('test-1')
        const element2 = linkedList.removeAt(1)
        expect(element2).toBe('test-3')
        const invalid = linkedList.removeAt(100)
        expect(invalid).toBeUndefined()
    })

    test('Should remove element', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.push('test-3')
        const element = linkedList.remove('test-1')
        expect(element).toBe('test-1')
    })

    test('Should return the element index', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.push('test-3')
        const index = linkedList.indexOf('test-2')
        expect(index).toBe(1)
        const invalid = linkedList.indexOf('test-45')
        expect(invalid).toBe(-1)
    })

    test('Should return list in string format', () => {
        const linkedList = new LinkedList<string>()
        linkedList.push('test-1')
        linkedList.push('test-2')
        linkedList.push('test-3')
        const toString = linkedList.toString()
        expect(toString).toBe('test-1,test-2,test-3')
    })

    test('Should return an empty string if there are no values ​​in the list', () => {
        const linkedList = new LinkedList<string>()
        const toString = linkedList.toString()
        expect(toString).toBe('')
    })
})