import React from 'react';

import { Asidebar, Flex } from '../../components';
import Filter from "./Filter";
import ListView from './ListView';

const Gallery = () => {
  return (
    <Flex className="flex--row flex--tgap">

      <Flex className="flex--row flex--wrap flex--grow flex--rgap">
        <ListView />
      </Flex>

      <Asidebar>
        <Filter />
      </Asidebar>
    </Flex>
  );
}

export default Gallery;