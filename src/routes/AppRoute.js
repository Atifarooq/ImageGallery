import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Gallery, GalleryImage } from '../pages';

const AppRoute = () => {

    return (
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/image/:id" exact component={GalleryImage} />
        </Switch>
    );
};

export default AppRoute;
