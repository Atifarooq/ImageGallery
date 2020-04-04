import React from 'react';
import { Figure, Asidebar, Flex } from '../components';

const Gallery = () => {
  return (
    <Flex className="flex--row">

      <Flex className="flex--row flex--wrap flex--grow">
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
        <Figure src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png" caption="Image caption place here" />
      </Flex>

      <Asidebar>
        
      </Asidebar>
    </Flex>
  );
}

export default Gallery;
