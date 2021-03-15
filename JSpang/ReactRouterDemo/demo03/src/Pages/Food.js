import React from 'react';
import { Route,Link } from 'react-router-dom'
import Bread from './food/Bread'
import Tea from './food/Tea'
import Cake from './food/Cake'

function Food(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/food/bread">面包</Link></li>
                    <li><Link to="/food/tea">奶茶</Link></li>
                    <li><Link to="/food/cake">饼干</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>食物商品</h3></div>
                <Route path="/food/bread/" component={Bread} />
                <Route path="/food/tea" component={Tea} />
                <Route path="/food/cake/" component={Cake} />
            </div>
        </div>
    )
}

export default Food