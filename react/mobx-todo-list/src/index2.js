import React from 'react';
import ReactDOM from 'react-dom'
// 让一个状态可以被观察
import { makeAutoObservable } from "mobx"  //1
import { observer  } from 'mobx-react'  //观察者   2

// TimerView 2    Store 1 

class Timer {
  secondsPassed=0  //提供数据
  constructor(){
    makeAutoObservable(this)   //---被观察
  }
  increase(){
    this.secondsPassed +=1
  }
  //action
  reset(){
    this.secondsPassed =0
  }
}

const myTimer = new Timer()  //实例
//观察状态的组件
const TimerView=observer( ({timer})=>(  // 观察
  <button onClick={()=>timer.reset()} >Seconds passed:{timer.secondsPassed}</button>
  ))

  setInterval(()=>{
    myTimer.increase()
  },1000)

//根上套上 分开 组件去状态 组件不能再
// 组件不能搞状态
// 状态要提升 要被组件observer
// seconds -> 去到 组件中  StorageEvent.seconds
  //  observerable

// secondsPassed = 0 
// action increase reset 
ReactDOM.render(<TimerView timer={myTimer} />,document.body)