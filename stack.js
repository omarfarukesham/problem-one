
class Stack {
    constructor() {
        this.items = [];
    }
    
    addElements(element) {
        return this.items.push(element);
    }
    
    remove() {
        if(this.items.length > 0) {
            return this.items.pop();
        }
    }
    
    peek() {
        return this.items[this.items.length - 1];
    }
    
    isEmpty(){
       return this.items.length == 0;
    }
   
    size(){
        return this.items.length;
    }
 
   
    // clear(){
    //     this.items = [];
    // }
}

let stack = new Stack();

for (let i = 1; i <= 20; i++) {
    stack.addElements(i);
  }

console.log(stack.items);

//remove item code calling here....................
stack.remove();
let removeItem = stack.items
console.log(removeItem);

// rest of the items of stack here .................
console.log(stack.peek());

//check stack is empty or not ......................
console.log('Stack quantity is Empty :'.stack.isEmpty());

//length of stack output here...............................
console.log("Total length of stack ".stack.size());

// stack.clear();
// console.log(stack.items);