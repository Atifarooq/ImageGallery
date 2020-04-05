import React from 'react';
import { createMasonryCellPositioner, CellMeasurer, CellMeasurerCache } from 'react-virtualized';

import { NavLink } from 'react-router-dom';
import { Figure } from '../../components';

const IntractiveFigure = ({ render, image }) => {

    const { index, key, parent, style } = render;

    return (
        <CellMeasurer cache={MeasurerCache} index={index} key={key} parent={parent}>
            <NavLink style={style} className="flex intractive" to={`image/${image.id}`}>
                <Figure src={(image.is_album && image.images_count) ? image.images[0].link : image.link} caption={image.title} />
            </NavLink>
        </CellMeasurer>
    );
};

const MeasurerCache = new CellMeasurerCache({
    defaultHeight: 250,
    defaultWidth: 200,
    fixedWidth: true,
});

const CellPositioner = createMasonryCellPositioner({
    cellMeasurerCache: MeasurerCache,
    columnCount: 5,
    columnWidth: 225,
    spacer: 10,
});

export {
    MeasurerCache,
    CellPositioner,
    IntractiveFigure
};
