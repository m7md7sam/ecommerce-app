import React from 'react';

import CollectionItem from '../collection-item/CollectionItem'
import './CollectionPreview.scss';

const CollectionPreview = ({ title, items }) => {
    const renderItems = items
        .filter((item, index) => index < 4 )
        .map(item => <CollectionItem key={item.id} item={item} />);
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">{renderItems}</div>
        </div>
    );
};

export default CollectionPreview;