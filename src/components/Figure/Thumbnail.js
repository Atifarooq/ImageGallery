import React from 'react';
import PropTypes from "prop-types";

const Thumbnail = ({ className, src }) => {

    if (src.substr(src.length - 3) == 'mp4')
        return (
            <video className={className} controls="controls" src={src}>
                Your browser does not support the HTML5 Video element.
            </video>
        )
    else
        return (<img className={className} alt={src} src={src} />);
};

Thumbnail.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string
};

export default Thumbnail;
