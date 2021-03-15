//中序遍历  迭代
var inorderTraversal = function(root) {
    const res=[]
    const stack=[]
    while(root||stack.length){
        while (root) {
            stack.push(root)
            root=root.left
        }
        root=stack.pop()
        res.push(root.val)
        root=root.right
    }
    return res
}