import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Holiday from "../holiday/Holiday"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Orders from "../orders/Orders"

export function App() {
    return(
        <div className="container">
        <Header/>
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Main/>
                        </Route>
                        <Route path="/orders" component={Orders}/>
                        <Route path="/holiday/:id" component={Holiday}/>
                    </Switch>
                </div>
            </Router>

        </div>
    );

}

export default App;