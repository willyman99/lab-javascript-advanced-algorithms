class StackDataStructure {
  constructor() {
    this.stackControl = [];
    this.MAX_SIZE = 10;
  }
  
  canPush() {
    if (this.stackControl.length < this.MAX_SIZE) return true
    else return false
  }
  
  isEmpty() {
    if (!this.stackControl.length > 0) return true
    else return false
  }
  
  push(item) {
    if (this.canPush()) {
      this.stackControl.push(item)
      return this.stackControl
    }
    else return "Stack Overflow"
  }
  
  pop() {
    if (!this.isEmpty()) return this.stackControl.pop()
    else return "Stack Underflow"
  }
  
  display() {
    // ... your code goes here
  }
}
