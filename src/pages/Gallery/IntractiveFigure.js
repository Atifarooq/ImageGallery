import React from 'react';
import { NavLink } from 'react-router-dom';
import { Figure } from '../../components';

const IntractiveFigure = ({ image }) => {
    return (
        <NavLink className="flex intractive" to={`image/${image.id}`}>
            <Figure src={(image.is_album && image.images_count) ? image.images[0].link : image.link} caption={image.title} />
        </NavLink>
    );
}

export default IntractiveFigure;
