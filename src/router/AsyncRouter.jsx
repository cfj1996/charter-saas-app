/**
 * @DECS 异步请求页面
 * @FILENAME AsyncRouter
 * @time 2020/6/1 5:41 下午
 * @userName cfj
 */
import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import Home from '../page/Home/Index'
import Desc from '../page/Details/Index'

const AsyncRouter = () => {
    if(localStorage.auth){
        return <>
            <Route path="/desc">
                <Desc />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </>
    }
    return <Redirect to={{
        pathname: '/'
    }}/>
}
export default AsyncRouter