this.addEventListener('message', (e)=>{ // 消息监听
    // console.log(e);
    //console.log(document.body);//会报错，不能操作DOM，可能会和主线程冲突
    this.postMessage('Your said' + e.data)
  })