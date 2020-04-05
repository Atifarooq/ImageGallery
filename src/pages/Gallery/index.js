import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Figure, Asidebar, Flex } from '../../components';
import IntractiveFigure from "./IntractiveFigure";
import Filter from "./Filter";

import { getImages } from "../../state/actions";

const Gallery = () => {

  const gallery = useSelector(state => state.galleryReducer.gallery);
  const filter = useSelector(state => state.filterReducer.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages(filter));
  }, [filter])

  return (
    <Flex className="flex--row flex--tgap">

      <Flex className="flex--row flex--wrap flex--grow flex--rgap">
        {gallery && gallery.map((image, idx) => <IntractiveFigure key={idx} image={image} />)}
      </Flex>

      <Asidebar>
        <Filter />
      </Asidebar>
    </Flex>
  );
}

export default Gallery;