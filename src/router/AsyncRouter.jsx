/**
 * @DECS 异步请求页面
 * @FILENAME AsyncRouter
 * @time 2020/6/1 5:41 下午
 * @userName cfj
 */
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from '../page/Home/Index'
import Desc from '../page/Details/Index'

const AsyncRouter = () => {
    if(localStorage.auto){
        return <Switch>
            <Route exact path={'/'}>
                <Redirect to={'/home'}/>
            </Route>
            <Route exact path={"/desc"}>
                <Desc />
            </Route>
            <Route exact path={"/home"}>
                <Home />
            </Route>
            <Route path="*">
                <p>404</p>
            </Route>
        </Switch>
    }
    return <Redirect to={{
        pathname: '/login'
    }}/>
}
export default AsyncRouter
