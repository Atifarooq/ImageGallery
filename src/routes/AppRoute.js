import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Gallery from '../pages/Gallery';
import GalleryImage from '../pages/GalleryImage';

const AppRoute = () => {

    return (
        <Fragment>
            <BrowserRouter>
                <Suspense fallback={<p>Loading...</p>}>
                    <Switch>
                        <Route path="/" exact component={Gallery} />
                        <Route path="/image" exact component={GalleryImage} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Fragment>
    );
};

export default AppRoute;
