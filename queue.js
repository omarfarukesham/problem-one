/*
Author : Omar Faruk(Bangladesh)
Working as a javascript developer
*/

class IQueuable {
    constructor() {
      this.elements = {};
      this.head = 0;
      this.tail = 0;
    }

    enqueue(element) {
      this.elements[this.tail] = element;
      this.tail++;
    }

    dequeue() {
      const item = this.elements[this.head];
      delete this.elements[this.head];
      this.head++;
      return item;
    }


    peek() {
      return this.elements[this.head];
    }


    get length() {
      return this.tail - this.head;
    }

    get isEmpty() {
      return this.length === 0;
    }
  }
  
  // Access the methods and functionalities into the class..................... 
  let queue = new IQueuable();
  for (let i = 1; i <= 20; i++) {
    queue.enqueue(i);
  }


  // current item at the front of the queue ......................................
  let currentItem = queue.peek(); 
  console.log(currentItem); //1
  
  // current length of queue .....................................................
 let dataSize = queue.length
  console.log(dataSize);

  // dequeue all elements ........................................................
  let dequeueArray = []
  while (!queue.isEmpty) {
    let insertArray = queue.dequeue();
    dequeueArray.push(insertArray)
  }
 console.log(dequeueArray);

//   thanks for reading this code with your great passionate 