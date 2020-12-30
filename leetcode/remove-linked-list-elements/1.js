function ListNode(val){
    this.val=val;
    this.next=null;
}




function removeElements(head,val){ //头结点，val要检查的值
    // 如果当前结点的下一个结点的值为val，当前结点的next 指向next.next
    //如果头结点的值为val
    const dummy = {//哨兵结点  假结点
        // val 属性为空，假的 ，服务一下
        next:head //哨兵结点为头结点， 可能是val的结点服务 保持链表
    }
    let current = dummy;//当前结点先指向哨兵结点
    while(current &&current.next){// 遍历 尾结点 少做一次
        let next = current.next // 取当前结点的下一个结点
        if(next.val ===val){
            current.next = next.next;//值为val 下一个结点从链表的链式关系中移除
        }
        if(next.val !== val){//不要移除的
            current = next;
        }


    }
    return dummy.next; //返回dummy指向下一个next，移除了dummy

}