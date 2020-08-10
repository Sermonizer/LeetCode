/*
 * @Author: your name
 * @Date: 2020-07-24 16:52:22
 * @LastEditTime: 2020-08-10 11:03:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Algorithm\LC105_前序和中序遍历二叉树.js
 */

/**
 * 1. 前序：第一个节点就是根节点
 * 2. 中序：第一个节点前都是左子树，之后都是右子树
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var buildTree = function (preorder, inorder) {
    return buildTree(preorder, 0, preorder.length, inorder, 0, inorder.length)

    function buildTree(preorder, p_start, p_end, inorder, i_start, i_end) {
        // 如果preorder为空，返回null
        if (p_start === p_end) return null
        let root = new TreeNode(preorder[p_start])
        // 中序遍历中找到根节点的位置
        let i_root_index = inorder.indexOf(root.val)
        let left = i_root_index - i_start
        root.left = buildTree(preorder, p_start + 1, p_start + left + 1, inorder, i_start, i_root_index)
        root.right = buildTree(preorder, p_start + left + 1, p_end, inorder, i_root_index + 1, i_end)
        return root
    }
};

// 法2 慢、内存占用高
var buildTree = function(preorder, inorder) {
  if (preorder.length == 0 || inorder.length == 0) return null
  let root = new TreeNode(preorder[0])
  for (let i = 0; i < preorder.length; i++) {
      if (preorder[0] == inorder[i]) {
          root.left = buildTree(preorder.slice(1, i+1), inorder.slice(0, i))
          root.right = buildTree(preorder.slice(i+1, preorder.length), inorder.slice(i+1, inorder.length))
          break
      }
  }
  return root
};
