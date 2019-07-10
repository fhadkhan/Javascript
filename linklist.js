function LinkList(){
    this.head = null;
    this.tail = null;
  }
  
  function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
  
  LinkList.prototype.addToHead = function(value){
    let newNode = new Node(value, this.head, null);
    if(this.head) this.head.prev = newNode;
    else this.tail = newNode;
    this.head = newNode;
  }
  
  LinkList.prototype.addToTail = function(value){
    let newNode = new Node(value, null, this.tail);
    if(this.tail) this.tail.next = newNode;
    else this.head = newNode;
    this.tail = newNode;
  }
  
  LinkList.prototype.removeHead = function(){
    if(!this.head) return null;
    let val = this.head.value;
    this.head = this.head.next;
    if(this.head) this.head.prev = null
    else this.tail = null;
    return val;
  }
  
  LinkList.prototype.removeTail = function(){
    if(!this.tail) return null;
    let val = this.tail.value;
    this.tail = this.tail.prev;
    if(this.tail) this.tail.next = null
    else this.head = null;
    return val;
  }
  
  LinkList.prototype.search = function(searchValue){
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === searchValue) return currentNode.value;
      currentNode = currentNode.next;
    }
    return null;
  }
  
  LinkList.prototype.indexOf = function(value){
    let indexes = [];
    let currentIndex = 0;
    let currentNode = this.head;
    while(currentNode){
      if(currentNode.value === value){
        indexes.push(currentIndex);
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return indexes;
  };
  
  let ll = new LinkList();
  
  ll.addToHead(3);
  ll.addToHead(6);
  ll.addToHead(2);
  ll.addToTail(3);
  ll.addToTail(4);
  ll.addToTail(4);
  
  console.log(ll.removeHead());
  console.log(ll.removeTail());
  
  console.log(ll.indexOf(3));