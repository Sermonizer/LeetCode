/*
 * @Author: your name
 * @Date: 2020-06-11 10:00:38
 * @LastEditTime: 2020-06-11 10:32:27
 * @LastEditors: Please set LastEditors
 * @Description: 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））。
                注意：保证测试中不会当栈为空的时候，对栈调用pop()或者min()或者top()方法。
 * @FilePath: \Algorithm\包含min函数的栈.js
 */

//  栈 先进后出

let stack = [], minStack = [];
function push(node) {
    // write code here
    stack.push(node)
    if (minStack.length === 0) minStack.push(node);
    else if (node <= minStack[0]){
        minStack.push(node)
    }
}
function pop() {
    // write code here
    if (stack.length !== 0) {
        if (stack.length === minStack.length) return stack.pop()
        else return minStack.pop() 
    }
}
function top() {
    // write code here
    if (stack.length !== 0) {
        return stack[stack.length - 1]
    }
}
function min() {
    // write code here
    if (minStack.length !== 0) return minStack[minStack.length - 1]
}

push(5)
push(3)
push(6)
console.log(pop());

console.log("s", stack, "m", minStack);

