function queue() {
    let storage = []
    return {
        getAll: () => storage,
        queue: (i) => {
            storage.push(i)
            return `${i} was added`
        },
        dequeue: () => {
            if(storage.length === 0) {
                return undefined
            } else {
                return storage.shift()
            }   
         }
    }
}

let myQueue = queue()
console.log(myQueue.queue(1))
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.dequeue())
console.log(myQueue.queue(2))
console.log(myQueue.queue(3))
console.log(myQueue.queue(4))
console.log(myQueue.queue(5))

console.log(myQueue.getAll())
