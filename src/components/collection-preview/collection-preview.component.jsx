import React from 'react';

import ActionItem from '../action-item/action-item.component';

const CollectionPreview = ({ title, actions }) => (
    <div>
        <h1>{ title }</h1>
        { actions.filter((action, index) => index < 4).map(action => (
            <ActionItem key={ action.id } { ...action } />
        )) }
    </div>
);

export default CollectionPreview;