import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Gallery, GalleryImage } from '../pages';

const AppRoute = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/" exact component={Gallery} />
                        <Route path="/image/:id" exact component={GalleryImage} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Fragment>
    );
};

export default AppRoute;
