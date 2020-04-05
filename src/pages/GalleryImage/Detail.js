import React from 'react';
import { useSelector } from 'react-redux';
import { Media } from '../../components';

const Detail = () => {

    const album = useSelector(state => state.imageReducer.image);

    return (
        <article className="article">
            <h2 className="article__title">{album.title}</h2>
            <p>{album.description || 'description is not available for this image.'}</p>

            <Media label="Views" count={album.views} />
            <Media label="Up" count={album.ups} />
            <Media label="Down" count={album.downs} />
            <Media label="Points" count={album.points} />
            <Media label="Score" count={album.score} />
            <Media label="Vote" count={album.vote} />
            <Media label="Favourit" count={album.favorite_count} />
            <Media label="Comments" count={album.comment_count} />
        </article>
    );
}

export default Detail;
