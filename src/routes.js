import { Route, Switch } from 'react-router-dom';
import React from 'react';

export default (
    <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/booklist" component={ BookList } />
        <Route path="/booklist/:bookdetail" component={ BookDetail } />
    </Switch>
)