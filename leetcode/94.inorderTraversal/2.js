//递归写法
var inorderTraversal = function(root) {
    const res=[]
    const inorder=(root)=>{
        if(!root){return}
        inorder(root.left)
        res.push(root.val)
        inorder(root.right)
    }
    inorder(root)
    console.log(res);

}
inorderTraversal(root=[1,null,2,3])