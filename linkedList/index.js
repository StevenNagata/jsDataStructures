//Define what each node will look like in this linked list
class Node {
    constructor(value, next) {
        this.value = value,
        this.next = next
    }
}
//Define the LinkedList class
class LinkedList {
    constructor(){
        this.head = null,
        this.size = 0
    }
    // add a node to LinkedList
    add(value) {
        let newNode = new Node(value, null)
        if(!this.head) {
            this.head = newNode
        } else {
            let currentNode = this.head 
            while(currentNode.next !== null) {
                currentNode = currentNode.next
            }
            currentNode.next = newNode
        }
        this.size++
        return `${value} was added to the list`
    }
    remove(value) {
        let currentNode = this.head
        let previousNode =null
        while(currentNode.value !== value) {
            if(!currentNode.next) {
                return -1
            }
            previousNode = currentNode
            currentNode = currentNode.next
        }
        previousNode.next = currentNode.next
        currentNode.next
        this.size--
        return `${value} was removed from the list`
    }
    insertAt(value, index) {
        if(index > 0 && index > this.size) {
            return undefined
        } else {
            let currentIndex = 0 
            let previousNode = null
            let currentNode = this.head
            while(currentIndex !== index) {
                previousNode = currentNode
                currentNode = currentNode.next
                currentIndex++
            }
            let newNode = new Node(value, currentNode)
            previousNode.next = newNode
            this.size++
            return `${value} was added to the list at index ${index}`
        }
    }
    deleteAt(index) {
        if(index > 0 && index + 1 > this.size) {
            return undefined
        } else {
            let currentIndex = 0 
            let previousNode = null
            let currentNode = this.head
            while(currentIndex !== index) {
                previousNode = currentNode
                currentNode = currentNode.next
                currentIndex++
            }
            if(index === 0) {
                this.head = this.head.next
            } else {
            previousNode.next = currentNode.next
            }
            this.size--
        }
    }
    search(value) {
        let currentNode = this.head
        let currentIndex = 0
        if(currentNode === null) {
            return -1
        } else {
            while(currentNode.value !== value) {
                if(currentNode.next === null) {
                    return -1
                } else {
                    currentIndex++
                    currentNode = currentNode.next
                }
            }
            return currentIndex
        }
     }
     getAt(index) {
         if(index > 0 &&  index > this.size) {
             return -1
         }
         let currentIndex = 0
         let currentNode = this.head
         while(currentIndex != index) {
             currentNode = currentNode.next
             currentIndex++
         }
         return currentNode.value
     }
    }

var linkedList = new LinkedList()
linkedList.add(1)
linkedList.add(2)
linkedList.add(3)
linkedList.add(4)
console.log(linkedList.getAt(0))

console.log(JSON.stringify(linkedList,null, "  "))
