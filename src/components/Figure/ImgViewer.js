import React from 'react';
import PropTypes from "prop-types";

const ImgViewer = ({ className, src }) => {
    return (
        <img className={className} alt="image thumbnail" src={src} />
    );
};

ImgViewer.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string
};

export default ImgViewer;
