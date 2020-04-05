import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Masonry } from 'react-virtualized';

import { getImages } from "../../state/actions";
import { MeasurerCache, CellPositioner, IntractiveFigure } from './IntractiveFigure';
import { Spinner } from '../../components';

const [height, width] = [window.innerHeight - 100, window.innerWidth - 350];

const ListView = () => {

    const gallery = useSelector(state => state.galleryReducer.gallery);
    const loading = useSelector(state => state.galleryReducer.loading);
    const filter = useSelector(state => state.filterReducer.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImages(filter));
    }, [filter])

    if (loading)
        return (<Spinner />);

    return (
        <Masonry
            cellCount={gallery.length}
            cellMeasurerCache={MeasurerCache}
            cellPositioner={CellPositioner}
            cellRenderer={render => <IntractiveFigure key={render.key} render={render} image={gallery[render.index]} />}
            height={height}
            width={width}
        />
    );
}

export default ListView;
