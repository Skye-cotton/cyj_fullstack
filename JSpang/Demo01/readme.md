1. 首先通过npm全局安装create-react-app
    npm install -g create-react-app
2. create-react-app my-app

- 启动 npm start


## 周期函数
    componentWillMount(){
        console.log('componentWillMount----------组件将要挂载');//1
    }
    componentDidMount(){
        console.log('componentDidMount----------组件挂载完成');//3
    }
    shouldComponentUpdate(){//优化性能
        console.log('shouldComponentUpdate');//  //  *1
        return true
    }

    componentWillUpdate(){//  *2
        console.log('componentWillUpdate');
        return true
    }
    componentDidUpdate(){
        console.log('componentDidUpdate');   //   *3  render之后
        return true
    }
    render(){}
     
    componentWillReceiveProps(){
        console.log('child ----componentWillReceiveProps');
    }//使用子组件时调用

     componentWillUnmount(){
        console.log('componentWillUnmount');
    }//组件删除时调用
- componentWillReceiveProps() 
    组件第一次存在于dom中，函数是不会被执行
    如果已经存在于DOM中，函数才会被执行

## 组件优化 

    shouldComponentUpdate(nextProps,nextState){
        if(nextProps.content !== this.props.content){
            return true
        }else{
            return false
        }
        
    }
