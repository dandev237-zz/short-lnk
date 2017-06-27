/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

//Stateless functional component
export default () => {
    return (
        <div>
            <PrivateHeader title="Your Links"/>
            <LinksList/>
            <AddLink/>
        </div>
    );
};