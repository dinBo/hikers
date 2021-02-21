import React from 'react';

import Parallax from '../../components/parallax/parralax.component';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import translations from '../../translations/rs_RS';
import actions from '../actions/actions.data';

const Home = () => (
    <div class='home'>
        <Parallax />
        <h1>Home page</h1>
        <CollectionPreview title={ translations.HOME.myActions } actions={ actions.userActions } />
        <CollectionPreview title={ translations.HOME.allActions } actions={ actions.allActions } />
    </div>
);

export default Home;