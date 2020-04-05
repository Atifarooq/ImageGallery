import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getImageById } from "../../state/actions";

import { Flex, Asidebar, Figure } from '../../components';
import Detail from './Detail';

const GalleryImage = ({ match }) => {

    const id = match.params.id;
    const album = useSelector(state => state.imageReducer.image);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getImageById(id));
    }, [id]);

    return (
        <Flex className="flex--row flex--tgap">

            <Flex className="flex--row flex--wrap flex--grow flex--rgap">
                <Figure className="figure--lg" src={(album.is_album && album.images_count) ? album.images[0].link : album.link} caption={album.title} />
            </Flex>

            <Asidebar>
                <Detail />
            </Asidebar>
        </Flex>
    );
}

export default GalleryImage;
