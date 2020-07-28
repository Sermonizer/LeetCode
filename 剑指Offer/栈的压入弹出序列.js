/*
 * @Author: your name
 * @Date: 2020-06-16 09:40:17
 * @LastEditTime: 2020-06-22 15:49:38
 * @LastEditors: Please set LastEditors
 * @Description: 
 *  思路：借用一个辅助的栈，遍历压栈顺序，先将第一个放入栈中，这里是1，
 *       然后判断栈顶元素是不是出栈顺序的第一个元素，这里是4，很显然1≠4，
 *       所以我们继续压栈，直到相等以后开始出栈，出栈一个元素，
 *       则将出栈顺序向后移动一位，直到不相等，这样循环等压栈顺序遍历完成，
 *       如果辅助栈还不为空，说明弹出序列不是该栈的弹出顺序。
 *  举例：入栈 1,2,3,4,5
         出栈 4,5,3,2,1
 * @FilePath: \Algorithm\栈的压入弹出序列.js
 */ 

function IsPopOrder(pushV, popV)
{
    // write code here
    let stack = []
    if (pushV.length === 0) return false;
    for (let i = 0, j = 0; i < pushV.length; i++) {
        stack.push(pushV[i])
        while (stack.length !== 0 && stack[stack.length - 1] === popV[j]) {
            stack.pop()
            j++
        }
    }
    return stack.length === 0
}

console.log(IsPopOrder([1,2,3,4,5], [4,5,3,2,1]));
