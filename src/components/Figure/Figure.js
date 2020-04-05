import React from 'react';
import PropTypes from "prop-types";

import ImgViewer from './ImgViewer';
import FigureCaption from './FigureCaption';

const Figure = ({ src, caption, className }) => {
    return (
        <figure className={`figure ${className}`}>
            <ImgViewer className="figure__image" src={src} />
            <FigureCaption className="figure__caption" caption={caption} />
        </figure>
    );
};

Figure.propTypes = {
    src: PropTypes.string,
    caption: PropTypes.string
};

export default Figure;
