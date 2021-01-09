# 字节h5面试题之Drag and drop
良好的用户体验，
1. 基础好，体现在细节，能力增长梯度
2. 比较复杂的特效


## GitHub 拖拽上传功能
1. 给要拖拽的元素，加 draggable="true"  css样式cursor: move;
2. 拖拽元素在上空的感觉
3. drag  有三个事件
    JS 在前端是基于事件的语言，Event机制 495
    on + 红宝书495页 DOM Event level
    - dragstart
    - drap
    - dragend

    drop 异步
    - dragenter  进入  border dashed  classList.add
    - dragover   多次
    - leave 离开 classList.remove

    drap + drop 良好用户真实体验模拟的API，比较复杂
    draggable = true 属性
    dragstart drag dragend
    dragenter dragover dragleave + drop
    阻止默认行为， event.preventDefault()
    oForm submit

作业：请完成拖回去