import React from 'react';
import { useSelector } from 'react-redux';
import { Media } from '../../components';

const Detail = () => {

    const album = useSelector(state => state.imageReducer.image);

    return (
        <article className="article">
            <h2 className="article__title">{album.title}</h2>
            <p>{album.description || 'description is not available for this image.'}</p>

            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
            <Media label="Views" icon="" count={album.views} />
        </article>
    );
}

export default Detail;