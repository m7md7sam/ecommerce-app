import React  from 'react';
import { Route } from 'react-router-dom';

import CollectionPreview from '../../components/collections-overview/CollectionsOverview';
import Collection from '../collection/Collection';

const Shop = ({ match }) => {
    return (
        <div className="shop-page">
             <Route exact path={`${match.path}`} component= {CollectionPreview} />
             <Route path={`${match.path}/:collectionId`} component= {Collection} />
        </div>
    );
};

export default Shop;