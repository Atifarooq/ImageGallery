import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageById } from "../../state/actions";

import { Flex, Asidebar, Figure, Spinner } from '../../components';
import Detail from './Detail';

const GalleryImage = ({ match }) => {

    const id = match.params.id;
    const album = useSelector(state => state.imageReducer.image);
    const loading = useSelector(state => state.imageReducer.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getImageById(id));
    }, [id]);

    if (loading)
        return (<Spinner />);

    return (
        <Flex className="flex--row flex--tgap">

            <Flex className="flex--row flex--wrap flex--grow">
                <Figure className="figure--lg" src={(album.is_album && album.images_count) ? album.images[0].link : album.link} caption={album.title} />
            </Flex>

            <Asidebar>
                <Detail />
            </Asidebar>
        </Flex>
    );
}

export default GalleryImage;
