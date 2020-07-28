/*
 * @Author: your name
 * @Date: 2020-06-22 15:07:08
 * @LastEditTime: 2020-06-29 09:29:04
 * @LastEditors: Please set LastEditors
 * @Description: 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 *               如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。
 * 
 * 思路: 二叉搜索树 下一层必定比上一层的数大 右节点比左节点大
        BST的后序序列的合法序列是，对于一个序列S，最后一个元素是x （也就是根），
        如果去掉最后一个元素的序列为T，那么T满足：T可以分成两段，
        前一段（左子树）小于x，后一段（右子树）大于x，
        且这两段（子树）都是合法的后序序列。完美的递归定义 : ) 
 * @FilePath: \Algorithm\二叉搜索树的后序遍历序列.js
 */

function VerifySquenceOfBST(sequence) {
  if (sequence.length === 0) return false;
  let size = sequence.length,
    i = 0;

  while (--size) {
    while (sequence[i] < sequence[size]) i++;
    while (sequence[i] > sequence[size]) i++;
    if (i < size) return false;
    i = 0;
  }
  return true;
}

console.log(VerifySquenceOfBST([1, 2, 5, 3, 6, 7, 4]));
