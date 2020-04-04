import React from 'react';
import PropTypes from "prop-types";

const FigureCaption = ({ className, caption }) => {
    return (
        <figcaption className={className}>{caption}</figcaption>
    );
};

FigureCaption.propTypes = {
    caption: PropTypes.string,
    className: PropTypes.string
};

export default FigureCaption;
