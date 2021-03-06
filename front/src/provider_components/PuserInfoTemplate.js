import React, {Children, Component} from 'react';
import './PuserInfoTemplate.css'
import PuserInfo from './PuserInfo'
import PuserInfoUpdate from './PuserInfoUpdate'
import {Route, Switch, BrowserRouter,Link} from 'react-router-dom'

const PuserInfoTemplate = (props) =>{
    return(
        <main className="UserInfoTemplate">
            <div className="top">
                <div className="title">
                    <Link to= '/provider/user'>판매자 정보</Link>
                </div>
            </div>
            <section className="products-wrapper">
                <div>
                    <Switch>
                        <Route path={`${props.match.url}/update`} render={()=><PuserInfoUpdate token={props.token} userId={props.userId}/>} />
                        <Route exact = {true} path={`${props.match.url}`} render={()=><PuserInfo token={props.token} userId={props.userId}/>}/>
                    </Switch>
                </div>   
            </section>
        </main>
    )
    
}

export default PuserInfoTemplate;

