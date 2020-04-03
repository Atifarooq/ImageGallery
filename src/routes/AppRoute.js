import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Gallery from '../pages/Gallery';
import ImageDetail from '../pages/ImageDetail';

const AppRoute = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/" exact component={Gallery} />
                        <Route path="/detail/:id" exact component={ImageDetail} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Fragment>
    );
};

export default AppRoute;
