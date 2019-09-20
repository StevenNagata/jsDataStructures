//Define what each node will look like in this linked list
class Node {
    constructor(value, previous, next) {
        this.value = value,
        this.previous = previous,
        this.next = next
    }
}

class LinkedList {
    constructor(){
        this.head = null,
        this.tail = null
    }
}
var linkedList = new LinkedList()
var head = new Node(5, 'thisisprev', 'thisisnext')
console.log(linkedList)
console.log(head)