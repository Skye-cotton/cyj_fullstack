var MinStack = function() {
    this.stack=[];
    this.minstack=[Infinity]
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
    this.minstack.push(Math.min(this.minstack[this.minstack.length-1],x))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
   this.stack.pop()
    this.minstack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minstack[this.minstack.length-1]
};