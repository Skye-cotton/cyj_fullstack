import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import {loginByPhone} from './store/actionCreators'

const Login = (props) => {
    const {userInfo} = props
    console.log(userInfo);
    useEffect(()=>{
        loginByPhoneDispatch('13755944504','xiaochen123')
    },[])
    return(
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    userInfo: state.getIn(["user","userInfo"])
})

const mapDispatchToProps = dispatch => {
    return{
        loginByPhoneDispatch(phone,password) {
          dispatch(actionCreators.loginByPhone(phone,password))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Login));