//Page that uses SimpleChat component

import React from 'react';
import {SimpleChat} from '@/components/simplechat'; // replace with the actual path to SimpleChat

const SimpleChatPage = props => {
    return (
        <React.Fragment>
            <SimpleChat {...props} />
        </React.Fragment>
    );
};

export default SimpleChatPage;