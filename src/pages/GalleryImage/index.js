import React from 'react';

import { Flex, Asidebar, Figure } from '../../components';
import Detail from './Detail';

const GalleryImage = () => {
    return (
        <Flex className="flex--row flex--tgap">

            <Flex className="flex--row flex--wrap flex--grow flex--rgap">
                <Figure
                    src="https://cdn.iconscout.com/icon/free/png-256/gallery-44-267592.png"
                    caption="Image caption place here"
                />
            </Flex>

            <Asidebar>
                <Detail />
            </Asidebar>
        </Flex>
    );
}

export default GalleryImage;
