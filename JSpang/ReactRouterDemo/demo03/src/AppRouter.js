import React from 'react';
import { BrowserRouter as Router,Route,Link } from "react-router-dom"
import Index from './Pages/Index'
import Food from './Pages/Food'
import './index.css'

function AppRouter(){
    return (
        <Router>
            <div className="mainDiv">
                <div className="leftNav">
                    <h3>一级导航</h3>
                    <ul>
                        <li><Link to="/">商品首页</Link></li>
                        <li><Link to="/food/">食物</Link></li>
                        <li><Link to="">书籍</Link></li>
                        <li><Link to="">笔具</Link></li>
                    </ul>
                </div>

                <div className="rightMain">
                    <Route path="/" exact component={Index} />
                    <Route path="/food/"  component={Food} />
                </div>
            </div>
        </Router>
    )
}

export default AppRouter