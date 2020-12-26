import React from 'react';
import { connect } from 'react-redux';

import CollectionPreview from '../collection-preview/CollectionPreview';

import './CollectionsOverview.scss';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {
                collections.map(({id, ...otherCollectionProps}) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })
            }
        </div>
    );
};

const mapStateToProps = ({shop}) => {
    const collectionsForPreview = Object.keys(shop.collections).map(key => shop.collections[key])
    return ({collections: collectionsForPreview})
};

export default connect(mapStateToProps)(CollectionsOverview)