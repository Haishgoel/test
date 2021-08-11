import React from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import TableData from './Component/TableData'
import Cart from './Component/Cart'

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route path="/" exact component={TableData} />
            <Route path="/" component={Cart} />
            </Switch>
        </Router>
    
    )
}
export default Routes